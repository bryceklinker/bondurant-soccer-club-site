using System.Net;
using Bsc.Function.Alerts.Commands;
using Bsc.Function.Alerts.Models;
using Bsc.Function.Alerts.Queries;
using Bsc.Function.Common;
using Bsc.Function.Common.Authentication;
using MediatR;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;

namespace Bsc.Function.Alerts;

public class AlertTriggers(IMediator mediator, IRequestAuthenticator authenticator)
{
    [Function("GetAlerts")]
    public async Task<HttpResponseData> GetAlertsAsync(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "alerts")] HttpRequestData req
    )
    {
        req.Query.TryGetBool("includeExpired", out var includeExpired);
        var alerts = await mediator.Send(new GetAlertsQuery(includeExpired));
        return await req.CreateJsonResponse(alerts, cache: true);
    }

    [Function("PostAlert")]
    public async Task<HttpResponseData> PostAlertAsync(
        [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "alerts")] HttpRequestData req
    )
    {
        await req.AuthenticateAsync(authenticator);
        var command = await req.ReadBodyAsJsonAsync<CreateAlertCommand>();
        await mediator.Send(command);
        return req.CreateResponse(HttpStatusCode.OK);
    }

    [Function("PutAlert")]
    public async Task<HttpResponseData> PutAlertAsync(
        [HttpTrigger(AuthorizationLevel.Anonymous, "put", Route = "alerts/{id:guid}")]
            HttpRequestData req,
        Guid id
    )
    {
        await req.AuthenticateAsync(authenticator).ConfigureAwait(false);
        var command = await req.ReadBodyAsJsonAsync<UpdateAlertCommand>().ConfigureAwait(false);
        await mediator.Send(command with { Id = id });
        return req.CreateResponse(HttpStatusCode.OK);
    }

    [Function("DeleteAlert")]
    public async Task<HttpResponseData> DeleteAlertAsync(
        [HttpTrigger(AuthorizationLevel.Anonymous, "delete", Route = "alerts/{id:guid}")]
            HttpRequestData req,
        Guid id
    )
    {
        await req.AuthenticateAsync(authenticator).ConfigureAwait(false);
        var command = new DeleteAlertCommand(id);
        await mediator.Send(command);
        return req.CreateResponse(HttpStatusCode.OK);
    }
}
