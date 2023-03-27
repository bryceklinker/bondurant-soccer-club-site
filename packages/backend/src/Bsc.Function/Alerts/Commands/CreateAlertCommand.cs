using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;
using Bsc.Function.Alerts.Config;
using Bsc.Function.Alerts.Models;
using MediatR;

namespace Bsc.Function.Alerts.Commands;

public record CreateAlertCommand(CreateAlertModel Model) : IRequest;

public class CreateAlertCommandHandler : IRequestHandler<CreateAlertCommand>
{
    private readonly BlobServiceClient _client;
    private readonly IAlertsConfiguration _config;

    public CreateAlertCommandHandler(BlobServiceClient client, IAlertsConfiguration config)
    {
        _client = client;
        _config = config;
    }

    public async Task Handle(CreateAlertCommand request, CancellationToken cancellationToken)
    {
        var container = _client.GetBlobContainerClient(_config.SiteContainerName);
        await container.CreateIfNotExistsAsync(cancellationToken: cancellationToken).ConfigureAwait(false);
        var alertsBlob = container.GetBlockBlobClient(_config.BlobPath);
        await using var readStream = await alertsBlob.OpenReadAsync(cancellationToken: cancellationToken).ConfigureAwait(false);
        var currentAlerts = await JsonSerializer.DeserializeAsync<AlertModel[]>(readStream, cancellationToken: cancellationToken);
        var updatedAlerts = currentAlerts.Append(AlertModel.FromCreateModel(request.Model)).ToArray();
        await using var writeStream = await alertsBlob.OpenWriteAsync(true, cancellationToken: cancellationToken).ConfigureAwait(false);
        await JsonSerializer.SerializeAsync(writeStream, updatedAlerts, cancellationToken: cancellationToken).ConfigureAwait(false);
    }
}