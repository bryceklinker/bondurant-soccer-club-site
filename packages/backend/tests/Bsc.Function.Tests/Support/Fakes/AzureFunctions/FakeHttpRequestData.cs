using System.Net;
using System.Security.Claims;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;

namespace Bsc.Function.Tests.Support.Fakes.AzureFunctions;

public class FakeHttpRequestData(
    Stream? body = null,
    HttpHeadersCollection? headers = null,
    Uri? uri = null,
    ClaimsIdentity[]? identities = null,
    string method = "GET"
) : HttpRequestData(new FakeFunctionContext())
{
    public override Stream Body { get; } = body ?? new MemoryStream();
    public override HttpHeadersCollection Headers { get; } = headers ?? new HttpHeadersCollection();
    public override IReadOnlyCollection<IHttpCookie> Cookies { get; } = Array.Empty<IHttpCookie>();
    public override Uri Url { get; } = uri ?? new Uri("https://function.com");
    public override IEnumerable<ClaimsIdentity> Identities { get; } =
        identities ?? Array.Empty<ClaimsIdentity>();
    public override string Method { get; } = method;

    public override HttpResponseData CreateResponse()
    {
        return new FakeHttpResponseData(FunctionContext);
    }
}

public class FakeHttpResponseData : HttpResponseData
{
    public override HttpStatusCode StatusCode { get; set; } = HttpStatusCode.OK;
    public override HttpHeadersCollection Headers { get; set; } = new();
    public override Stream Body { get; set; } = new MemoryStream();
    public override HttpCookies Cookies { get; }

    public FakeHttpResponseData(FunctionContext functionContext)
        : base(functionContext) { }
}
