using Azure;
using Azure.Storage.Blobs.Models;
using Azure.Storage.Blobs.Specialized;
using Newtonsoft.Json;

namespace Bsc.Function.Tests.Support.Fakes;

public class FakeBlockBlobClient : BlockBlobClient
{
    private byte[] _content = Array.Empty<byte>();
    public byte[] Content => _content.ToArray();
    
    public override Task<Stream> OpenReadAsync(
        long position = 0, 
        int? bufferSize = null, 
        BlobRequestConditions conditions = null,
        CancellationToken cancellationToken = new CancellationToken())
    {
        return Task.FromResult<Stream>(new MemoryStream(_content));
    }

    public override async Task<Response<BlobContentInfo>> UploadAsync(
        Stream content, 
        BlobUploadOptions options,
        CancellationToken cancellationToken = new CancellationToken())
    {
        using var stream = new MemoryStream();
        await content.CopyToAsync(stream, cancellationToken);
        _content = stream.ToArray();
        var response = Response.FromValue(JsonConvert.DeserializeObject<BlobContentInfo>("{}"), new FakeResponse());
        return response;
    }
}