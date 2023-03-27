using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using Bsc.Function.Alerts.Commands;
using Bsc.Function.Alerts.Config;
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
        [HttpTrigger(AuthorizationLevel.Function, "post", Route = "alerts")] HttpRequestData req, ILogger log)
    {
        var model = await JsonSerializer.DeserializeAsync<CreateAlertModel>(req.Body).ConfigureAwait(false);
        await _mediator.Send(new EnqueueCreateAlertCommand(model));
        return req.CreateResponse(HttpStatusCode.OK);
    }
    
    [Function("CreateAlert")]
    public async Task CreateAlertAsync([QueueTrigger("alerts-queue", Connection = ConfigurationKeys.StorageAccountConnectionString)] string messageText, ILogger log)
    {
        var model = JsonSerializer.Deserialize<CreateAlertModel>(messageText);
        await _mediator.Send(new CreateAlertCommand(model)).ConfigureAwait(false);
    }
}