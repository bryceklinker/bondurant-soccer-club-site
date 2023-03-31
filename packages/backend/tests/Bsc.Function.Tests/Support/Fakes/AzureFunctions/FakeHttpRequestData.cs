using System.Net;
using System.Security.Claims;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;

namespace Bsc.Function.Tests.Support.Fakes.AzureFunctions;

public class FakeHttpRequestData : HttpRequestData
{
    public override Stream Body { get; }
    public override HttpHeadersCollection Headers { get; }
    public override IReadOnlyCollection<IHttpCookie> Cookies { get; }
    public override Uri Url { get; }
    public override IEnumerable<ClaimsIdentity> Identities { get; }
    public override string Method { get; }

    public FakeHttpRequestData(
        Stream? body = null,
        HttpHeadersCollection? headers = null,
        Uri? uri = null,
        ClaimsIdentity[]? identities = null,
        string method = "GET"
    )
        : base(new FakeFunctionContext())
    {
        Body = body ?? new MemoryStream();
        Headers = headers ?? new HttpHeadersCollection();
        Url = uri ?? new Uri("https://function.com");
        Identities = identities ?? Array.Empty<ClaimsIdentity>();
        Cookies = Array.Empty<IHttpCookie>();
        Method = method;
    }

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
