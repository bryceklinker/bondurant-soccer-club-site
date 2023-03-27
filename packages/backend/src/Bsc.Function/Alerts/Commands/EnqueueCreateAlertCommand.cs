using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Azure.Storage.Queues;
using Bsc.Function.Alerts.Config;
using Bsc.Function.Alerts.Models;
using MediatR;

namespace Bsc.Function.Alerts.Commands;

public record EnqueueCreateAlertCommand(CreateAlertModel Model) : IRequest;

public class EnqueueCreateAlertCommandHandler : IRequestHandler<EnqueueCreateAlertCommand>
{
    private readonly QueueServiceClient _client;
    private readonly IAlertsConfiguration _config;

    public EnqueueCreateAlertCommandHandler(QueueServiceClient client, IAlertsConfiguration config)
    {
        _client = client;
        _config = config;
    }

    public async Task Handle(EnqueueCreateAlertCommand request, CancellationToken cancellationToken)
    {
        var queue = _client.GetQueueClient(_config.QueueName);
        var json = JsonSerializer.Serialize(request.Model);
        await queue.SendMessageAsync(json, cancellationToken).ConfigureAwait(false);
    }
}