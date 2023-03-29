using Bsc.Function.Alerts.Models;
using Bsc.Function.Common;
using Bsc.Function.Common.Serialization;
using Bsc.Function.Tests.Support.Fakes;
using Microsoft.Azure.Functions.Worker.Http;

namespace Bsc.Function.Tests.Common;

public class HttpRequestDataExtensionsTests
{
    [Fact]
    public async Task WhenJsonResponseIsCreatedThenReturnsResponseWithJsonInBody()
    {
        var alert = new AlertModel(Guid.NewGuid(), "idk", Severity.High);
        var request = new FakeHttpRequestData();

        var response = await request.CreateJsonResponse(alert);

        var result = await ReadBodyAsJson<AlertModel>(response);
        result.Success.Should().BeTrue();
        result.Result?.Should().BeEquivalentTo(alert);
    }

    [Fact]
    public async Task WhenJsonResponseIsCreatedWithCachingThenCacheHeadersAreSet()
    {
        var request = new FakeHttpRequestData();

        var response = await request.CreateJsonResponse(new object(), cache: true);

        var cacheControl = response.Headers.GetValues("Cache-Control")
            .ToArray();
        cacheControl.Should().HaveCount(1);
        cacheControl[0].Should().Contain("max-age=3600");
        cacheControl[0].Should().Contain("must-revalidate");
    }

    private static async Task<SerializerResult<T>> ReadBodyAsJson<T>(HttpResponseData response)
    {
        response.Body.Seek(0, SeekOrigin.Begin);
        using var target = new MemoryStream();
        await response.Body.CopyToAsync(target);
        target.Seek(0, SeekOrigin.Begin);
        return await BscSerializer.DeserializeAsync<T>(target);
    }
}