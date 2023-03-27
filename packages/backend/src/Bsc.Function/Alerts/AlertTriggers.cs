using System.Text.Json;
using System.Threading.Tasks;
using Bsc.Function.Alerts.Commands;
using Bsc.Function.Alerts.Config;
using Bsc.Function.Alerts.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace Bsc.Function.Alerts;

public class AlertTriggers
{
    private readonly IMediator _mediator;

    public AlertTriggers(IMediator mediator)
    {
        _mediator = mediator;
    }

    [FunctionName("PostAlert")]
    public async Task<IActionResult> RunAsync(
        [HttpTrigger(AuthorizationLevel.Function, "post", Route = "alerts")] HttpRequest req, ILogger log)
    {
        var model = await JsonSerializer.DeserializeAsync<CreateAlertModel>(req.Body).ConfigureAwait(false);
        await _mediator.Send(new EnqueueCreateAlertCommand(model));
        return new OkResult();
    }
    
    [FunctionName("CreateAlert")]
    public async Task RunAsync([QueueTrigger("alerts-queue", Connection = ConfigurationKeys.StorageAccountConnectionString)] string messageText, ILogger log)
    {
        var model = JsonSerializer.Deserialize<CreateAlertModel>(messageText);
        await _mediator.Send(new CreateAlertCommand(model)).ConfigureAwait(false);
    }
}