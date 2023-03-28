using System;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using Bsc.Function.Alerts.Models;
using MediatR;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace Bsc.Function.Alerts;

public class AlertTriggers
{
    private readonly IMediator _mediator;

    public AlertTriggers(IMediator mediator)
    {
        _mediator = mediator;
    }

    [Function("PostAlert")]
    public async Task<HttpResponseData> PostAlertAsync(
        [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "alerts")] HttpRequestData req, ILogger log)
    {
        foreach (var identity in req.Identities)
        {
            log.LogInformation("Identity {Identity}", identity);
        }
        var command = await JsonSerializer.DeserializeAsync<CreateAlertCommand>(req.Body).ConfigureAwait(false);
        if (command == null)
            throw new InvalidOperationException("No data found in request body");

        await _mediator.Send(command);
        return req.CreateResponse(HttpStatusCode.OK);
    }
    
    [Function("PutAlert")]
    public async Task<HttpResponseData> PutAlertAsync(
        [HttpTrigger(AuthorizationLevel.Anonymous, "put", Route = "alerts/{id:guid}")] HttpRequestData req, Guid id, ILogger log)
    {
        foreach (var identity in req.Identities)
        {
            log.LogInformation("Identity {Identity}", identity);
        }
        var command = await JsonSerializer.DeserializeAsync<UpdateAlertCommand>(req.Body).ConfigureAwait(false);
        if (command == null)
            throw new InvalidOperationException("No data found in request body");

        await _mediator.Send(command with { Id = id });
        return req.CreateResponse(HttpStatusCode.OK);
    }
}