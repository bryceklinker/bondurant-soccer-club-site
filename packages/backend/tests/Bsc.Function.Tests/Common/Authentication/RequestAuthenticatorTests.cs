using Bsc.Function.Common.Authentication;
using Bsc.Function.Tests.Support;
using Bsc.Function.Tests.Support.Fakes;
using Microsoft.Azure.Functions.Worker.Http;

namespace Bsc.Function.Tests.Common.Authentication;

public class RequestAuthenticatorTests
{
    private readonly string _validToken;
    private readonly IRequestAuthenticator _authenticator;

    public RequestAuthenticatorTests()
    {
        var fixture = new BscFixture();

        _validToken = fixture.GenerateToken();
        _authenticator = fixture.GetService<IRequestAuthenticator>();
    }

    [Fact]
    public async Task WhenRequestIsNullThenUnauthenticated()
    {
        var result = await _authenticator.IsAuthenticatedAsync(null);
        result.Should().BeFalse();
    }

    [Fact]
    public async Task WhenRequestIsMissingAuthorizationHeaderThenUnauthenticated()
    {
        var request = new FakeHttpRequestData(
            headers: new HttpHeadersCollection { { "other", "here" } }
        );

        var result = await _authenticator.IsAuthenticatedAsync(request);
        result.Should().BeFalse();
    }

    [Fact]
    public async Task WhenAuthorizationHeaderIsNotABearerTokenThenUnauthenticated()
    {
        var request = new FakeHttpRequestData(
            headers: new HttpHeadersCollection { { "Authorization", "NOT_GOOD_ENOUGH" } }
        );

        var result = await _authenticator.IsAuthenticatedAsync(request);
        result.Should().BeFalse();
    }

    [Fact]
    public async Task WhenAuthorizationIsMissingTheTokenThenUnauthenticated()
    {
        var request = new FakeHttpRequestData(
            headers: new HttpHeadersCollection { { "Authorization", "Bearer " } }
        );

        var result = await _authenticator.IsAuthenticatedAsync(request);
        result.Should().BeFalse();
    }

    [Fact]
    public async Task WhenAuthorizationHasAnInvalidTokenThenUnauthenticated()
    {
        var request = new FakeHttpRequestData(
            headers: new HttpHeadersCollection { { "Authorization", "Bearer not.a.real.token" } }
        );

        var result = await _authenticator.IsAuthenticatedAsync(request);
        result.Should().BeFalse();
    }

    [Fact]
    public async Task WhenAuthorizationHasValidTokenThenAuthenticated()
    {
        var request = new FakeHttpRequestData(
            headers: new HttpHeadersCollection { { "Authorization", $"Bearer {_validToken}" } }
        );

        var result = await _authenticator.IsAuthenticatedAsync(request);
        result.Should().BeTrue();
    }
}
