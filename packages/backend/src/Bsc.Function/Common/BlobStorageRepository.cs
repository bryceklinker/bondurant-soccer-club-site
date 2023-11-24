using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Azure.Storage.Blobs.Specialized;
using Bsc.Function.Common.Serialization;
using Microsoft.Extensions.Logging;

namespace Bsc.Function.Common;

public interface IRepository<T>
{
    Task<T[]> GetAllAsync(CancellationToken cancellationToken = default);
    Task SaveAllAsync(T[] items, CancellationToken cancellationToken = default);
}

public class BlobStorageRepository<T>(
    BlobServiceClient serviceClient,
    string containerName,
    string blobPath,
    ILogger logger
) : IRepository<T>
    where T : class
{
    public string ContainerName { get; } = containerName;
    public string BlobPath { get; } = blobPath;

    public BlobContainerClient ContainerClient =>
        serviceClient.GetBlobContainerClient(ContainerName);
    public BlockBlobClient BlobClient => ContainerClient.GetBlockBlobClient(BlobPath);

    public async Task<T[]> GetAllAsync(CancellationToken cancellationToken = default)
    {
        await EnsureContainerExistsAsync(cancellationToken).ConfigureAwait(false);
        if (!await BlobClient.ExistsAsync(cancellationToken).ConfigureAwait(false))
            return Array.Empty<T>();

        await using var readStream = await BlobClient
            .OpenReadAsync(cancellationToken: cancellationToken)
            .ConfigureAwait(false);
        var serializerResult = await BscSerializer
            .DeserializeAsync<T[]>(readStream, cancellationToken)
            .ConfigureAwait(false);

        if (serializerResult.Result != null)
        {
            foreach (var result in serializerResult.Result)
            {
                logger.LogInformation("deserialized item {@Result}", result);
            }
        }

        var items = serializerResult.Success ? serializerResult.Result : Array.Empty<T>();
        return items ?? Array.Empty<T>();
    }

    public async Task SaveAllAsync(T[] items, CancellationToken cancellationToken = default)
    {
        await EnsureContainerExistsAsync(cancellationToken).ConfigureAwait(false);
        using var content = new MemoryStream();
        await BscSerializer.SerializeAsync(content, items, cancellationToken).ConfigureAwait(false);
        content.Seek(0, SeekOrigin.Begin);
        await BlobClient
            .UploadAsync(content, cancellationToken: cancellationToken)
            .ConfigureAwait(false);
    }

    private async Task EnsureContainerExistsAsync(CancellationToken cancellationToken)
    {
        if (!await ContainerClient.ExistsAsync(cancellationToken).ConfigureAwait(false))
            await ContainerClient
                .CreateAsync(cancellationToken: cancellationToken)
                .ConfigureAwait(false);
    }
}
