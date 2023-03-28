using System.Net;
using Bsc.Function.Alerts.Models;
using Bsc.Function.Alerts.Queries;
using Bsc.Function.Common;
using Bsc.Function.Common.Authentication;
using MediatR;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;

namespace Bsc.Function.Alerts;

public class AlertTriggers
{
    private readonly IMediator _mediator;
    private readonly IRequestAuthenticator _authenticator;

    public AlertTriggers(IMediator mediator, IRequestAuthenticator authenticator)
    {
        _mediator = mediator;
        _authenticator = authenticator;
    }

    [Function("GetAlerts")]
    public async Task<HttpResponseData> GetAlertsAsync(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "alerts")] HttpRequestData req
    )
    {
        var alerts = await _mediator.Send(new GetAlertsQuery());
        return await req.CreateJsonResponse(alerts);
    }

    [Function("PostAlert")]
    public async Task<HttpResponseData> PostAlertAsync(
        [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "alerts")] HttpRequestData req
    )
    {
        var isAuthenticated = await _authenticator.IsAuthenticatedAsync(req);
        if (!isAuthenticated)
            throw new UnauthorizedAccessException();

        var serializerResult = await BscSerializer
            .DeserializeAsync<CreateAlertCommand>(req.Body)
            .ConfigureAwait(false);
        if (!serializerResult.Success || serializerResult.Result == null)
            throw new InvalidOperationException("No data found in request body");

        await _mediator.Send(serializerResult.Result);
        return req.CreateResponse(HttpStatusCode.OK);
    }

    [Function("PutAlert")]
    public async Task<HttpResponseData> PutAlertAsync(
        [HttpTrigger(AuthorizationLevel.Anonymous, "put", Route = "alerts/{id:guid}")]
            HttpRequestData req,
        Guid id
    )
    {
        var isAuthenticated = await _authenticator.IsAuthenticatedAsync(req);
        if (!isAuthenticated)
            throw new UnauthorizedAccessException();

        var serializerResult = await BscSerializer
            .DeserializeAsync<UpdateAlertCommand>(req.Body)
            .ConfigureAwait(false);
        if (!serializerResult.Success || serializerResult.Result == null)
            throw new InvalidOperationException("No data found in request body");

        await _mediator.Send(serializerResult.Result with { Id = id });
        return req.CreateResponse(HttpStatusCode.OK);
    }
}
