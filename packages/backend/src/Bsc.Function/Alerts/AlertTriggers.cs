using System.Net;
using Bsc.Function.Alerts.Models;
using Bsc.Function.Common;
using MediatR;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace Bsc.Function.Alerts;

public class AlertTriggers
{
    private readonly IMediator _mediator;
    private readonly ILogger _logger;

    public AlertTriggers(IMediator mediator, ILoggerFactory loggerFactory)
    {
        _mediator = mediator;
        _logger = loggerFactory.CreateLogger<AlertTriggers>();
    }

    [Function("PostAlert")]
    public async Task<HttpResponseData> PostAlertAsync(
        [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "alerts")] HttpRequestData req)
    {
        var serializerResult = await BscSerializer.DeserializeAsync<CreateAlertCommand>(req.Body).ConfigureAwait(false);
        if (!serializerResult.Success || serializerResult.Result == null)
            throw new InvalidOperationException("No data found in request body");
        
        await _mediator.Send(serializerResult.Result);
        return req.CreateResponse(HttpStatusCode.OK);
    }
    
    [Function("PutAlert")]
    public async Task<HttpResponseData> PutAlertAsync(
        [HttpTrigger(AuthorizationLevel.Anonymous, "put", Route = "alerts/{id:guid}")] HttpRequestData req, Guid id)
    {
        var serializerResult = await BscSerializer.DeserializeAsync<UpdateAlertCommand>(req.Body).ConfigureAwait(false);
        if (!serializerResult.Success || serializerResult.Result == null)
            throw new InvalidOperationException("No data found in request body");

        await _mediator.Send(serializerResult.Result with { Id = id });
        return req.CreateResponse(HttpStatusCode.OK);
    }
}