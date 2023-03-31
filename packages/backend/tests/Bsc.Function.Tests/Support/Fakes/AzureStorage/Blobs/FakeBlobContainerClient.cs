using Azure;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Azure.Storage.Blobs.Specialized;
using Newtonsoft.Json;

namespace Bsc.Function.Tests.Support.Fakes.AzureStorage.Blobs;

public class FakeBlobContainerClient : BlobContainerClient
{
    public const string BlobContainerInfoTemplate =
        @"{

    }";

    private readonly Dictionary<string, FakeBlockBlobClient> _blobClientsByName = new();

    public bool WasCreated { get; private set; }

    protected override BlockBlobClient GetBlockBlobClientCore(string blobName)
    {
        return GetFakeBlockBlobClient(blobName);
    }

    public override Task<Response<BlobContainerInfo>> CreateAsync(
        PublicAccessType publicAccessType = PublicAccessType.None,
        IDictionary<string, string> metadata = null,
        BlobContainerEncryptionScopeOptions encryptionScopeOptions = null,
        CancellationToken cancellationToken = new CancellationToken()
    )
    {
        WasCreated = true;
        var json = BlobContainerInfoTemplate;
        var response = Response.FromValue<BlobContainerInfo>(
            JsonConvert.DeserializeObject<BlobContainerInfo>(json),
            new FakeResponse()
        );
        return Task.FromResult(response);
    }

    public override Task<Response<bool>> ExistsAsync(
        CancellationToken cancellationToken = new CancellationToken()
    )
    {
        return Task.FromResult(Response.FromValue(WasCreated, new FakeResponse()));
    }

    public override async Task<Response<BlobContainerInfo>> CreateIfNotExistsAsync(
        PublicAccessType publicAccessType = PublicAccessType.None,
        IDictionary<string, string> metadata = null,
        BlobContainerEncryptionScopeOptions encryptionScopeOptions = null,
        CancellationToken cancellationToken = new CancellationToken()
    )
    {
        return await CreateAsync(
            publicAccessType,
            metadata,
            encryptionScopeOptions,
            cancellationToken
        );
    }

    public FakeBlockBlobClient GetFakeBlockBlobClient(string blobName)
    {
        return _blobClientsByName.ContainsKey(blobName)
            ? _blobClientsByName[blobName]
            : _blobClientsByName[blobName] = new FakeBlockBlobClient();
    }
}
