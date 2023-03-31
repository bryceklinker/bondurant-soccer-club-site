using System.Text;
using Azure;
using Azure.Storage.Blobs.Models;
using Azure.Storage.Blobs.Specialized;
using Newtonsoft.Json;

namespace Bsc.Function.Tests.Support.Fakes.AzureStorage.Blobs;

public class FakeBlockBlobClient : BlockBlobClient
{
    private byte[]? _content = Array.Empty<byte>();
    public byte[]? Content => _content?.ToArray();

    public override Task<Stream> OpenReadAsync(
        long position = 0,
        int? bufferSize = null,
        BlobRequestConditions conditions = null,
        CancellationToken cancellationToken = new CancellationToken()
    )
    {
        if (_content == null)
            throw new HttpRequestException("Blob not found");
        
        return Task.FromResult<Stream>(new MemoryStream(_content));
    }

    public override Task<Response<bool>> ExistsAsync(CancellationToken cancellationToken = new CancellationToken())
    {
        return Task.FromResult(Response.FromValue(_content != null, new FakeResponse()));
    }

    public override async Task<Response<BlobContentInfo>> UploadAsync(
        Stream content,
        BlobUploadOptions options,
        CancellationToken cancellationToken = new CancellationToken()
    )
    {
        using var stream = new MemoryStream();
        await content.CopyToAsync(stream, cancellationToken);
        _content = stream.ToArray();
        var response = Response.FromValue(
            JsonConvert.DeserializeObject<BlobContentInfo>("{}"),
            new FakeResponse()
        );
        return response;
    }

    public void Delete()
    {
        _content = null;
    }
    
    public string ContentAsString()
    {
        return Encoding.UTF8.GetString(Content);
    }

    public T? ContentAsJson<T>()
    {
        return JsonConvert.DeserializeObject<T>(ContentAsString());
    }

    public void SetupJsonContent<T>(T value)
    {
        SetupContent(JsonConvert.SerializeObject(value));
    }

    public void SetupContent(string value)
    {
        SetupContent(Encoding.UTF8.GetBytes(value));
    }

    public void SetupContent(byte[] bytes)
    {
        _content = bytes;
    }
}
