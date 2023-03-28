using Azure.Storage.Blobs;

namespace Bsc.Function.Tests.Support.Fakes;

public class FakeBlobServiceClient : BlobServiceClient
{
    private readonly Dictionary<string, FakeBlobContainerClient> _containerClientsByName = new();

    public override BlobContainerClient GetBlobContainerClient(string blobContainerName)
    {
        return GetFakeBlobContainerClient(blobContainerName);
    }

    public FakeBlobContainerClient GetFakeBlobContainerClient(string blobContainerName)
    {
        return _containerClientsByName.ContainsKey(blobContainerName)
            ? _containerClientsByName[blobContainerName]
            : _containerClientsByName[blobContainerName] = new FakeBlobContainerClient();
    }
}
