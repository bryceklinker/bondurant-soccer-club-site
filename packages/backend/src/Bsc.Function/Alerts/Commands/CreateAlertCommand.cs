using System;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;
using Bsc.Function.Alerts.Config;
using Bsc.Function.Alerts.Models;
using Bsc.Function.Common;
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
        var serializerResult = await BscSerializer.DeserializeAsync<AlertModel[]>(readStream, cancellationToken).ConfigureAwait(false);
        var currentAlerts = serializerResult.Success ? serializerResult.Result : Array.Empty<AlertModel>();
        var updatedAlerts = currentAlerts.Append(AlertModel.FromCreateModel(request.Model)).ToArray();
        using var content = new MemoryStream();
        await JsonSerializer.SerializeAsync(content, updatedAlerts, cancellationToken: cancellationToken).ConfigureAwait(false);
        content.Seek(0, SeekOrigin.Begin);
        await alertsBlob.UploadAsync(content, cancellationToken: cancellationToken);
    }
}