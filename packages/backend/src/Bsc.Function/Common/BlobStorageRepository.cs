using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;

namespace Bsc.Function.Common;

public interface IRepository<T>
{
    Task<T[]> GetAllAsync(CancellationToken cancellationToken = default);
    Task SaveAllAsync(T[] items, CancellationToken cancellationToken = default);
}

public class BlobStorageRepository<T> : IRepository<T>
    where T : class
{
    private readonly BlobServiceClient _serviceClient;
    public string ContainerName { get; }
    public string BlobPath { get; }

    public BlobContainerClient ContainerClient =>
        _serviceClient.GetBlobContainerClient(ContainerName);
    public BlockBlobClient BlobClient => ContainerClient.GetBlockBlobClient(BlobPath);

    public BlobStorageRepository(
        BlobServiceClient serviceClient,
        string containerName,
        string blobPath
    )
    {
        ContainerName = containerName;
        BlobPath = blobPath;
        _serviceClient = serviceClient;
    }

    public async Task<T[]> GetAllAsync(CancellationToken cancellationToken = default)
    {
        await ContainerClient.CreateIfNotExistsAsync(cancellationToken: cancellationToken);
        await using var readStream = await BlobClient
            .OpenReadAsync(cancellationToken: cancellationToken)
            .ConfigureAwait(false);
        var serializerResult = await BscSerializer
            .DeserializeAsync<T[]>(readStream, cancellationToken)
            .ConfigureAwait(false);
        var items = serializerResult.Success ? serializerResult.Result : Array.Empty<T>();
        return items ?? Array.Empty<T>();
    }

    public async Task SaveAllAsync(T[] items, CancellationToken cancellationToken = default)
    {
        await ContainerClient
            .CreateIfNotExistsAsync(cancellationToken: cancellationToken)
            .ConfigureAwait(false);
        using var content = new MemoryStream();
        await BscSerializer.SerializeAsync(content, items, cancellationToken).ConfigureAwait(false);
        content.Seek(0, SeekOrigin.Begin);
        await BlobClient
            .UploadAsync(content, cancellationToken: cancellationToken)
            .ConfigureAwait(false);
    }
}
