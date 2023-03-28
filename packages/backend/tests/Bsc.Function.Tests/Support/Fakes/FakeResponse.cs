using System.Net;
using Azure;
using Azure.Core;

namespace Bsc.Function.Tests.Support.Fakes;

public class FakeResponse : Response
{
    public override int Status { get; }
    public override string ReasonPhrase { get; }
    public override Stream? ContentStream { get; set; } = null;
    public override string ClientRequestId { get; set; } = "";
    public bool WasDisposed { get; private set; }

    public FakeResponse(int status = (int)HttpStatusCode.OK, string reasonPhrase = "")
    {
        Status = status;
        ReasonPhrase = reasonPhrase;
    }

    public override void Dispose()
    {
        WasDisposed = true;
    }

    protected override bool TryGetHeader(string name, out string? value)
    {
        throw new NotImplementedException();
    }

    protected override bool TryGetHeaderValues(string name, out IEnumerable<string>? values)
    {
        throw new NotImplementedException();
    }

    protected override bool ContainsHeader(string name)
    {
        throw new NotImplementedException();
    }

    protected override IEnumerable<HttpHeader> EnumerateHeaders()
    {
        throw new NotImplementedException();
    }
}
