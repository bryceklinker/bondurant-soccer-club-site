using Azure;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Azure.Storage.Blobs.Specialized;
using Newtonsoft.Json;

namespace Bsc.Function.Tests.Support.Fakes;

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

    public override Task<Response<BlobContainerInfo>> CreateIfNotExistsAsync(
        PublicAccessType publicAccessType = PublicAccessType.None,
        IDictionary<string, string> metadata = null,
        BlobContainerEncryptionScopeOptions encryptionScopeOptions = null,
        CancellationToken cancellationToken = new CancellationToken()
    )
    {
        var json = BlobContainerInfoTemplate;
        var response = Response.FromValue<BlobContainerInfo>(
            JsonConvert.DeserializeObject<BlobContainerInfo>(json),
            new FakeResponse()
        );
        return Task.FromResult(response);
    }

    public FakeBlockBlobClient GetFakeBlockBlobClient(string blobName)
    {
        return _blobClientsByName.ContainsKey(blobName)
            ? _blobClientsByName[blobName]
            : _blobClientsByName[blobName] = new FakeBlockBlobClient();
    }
}
