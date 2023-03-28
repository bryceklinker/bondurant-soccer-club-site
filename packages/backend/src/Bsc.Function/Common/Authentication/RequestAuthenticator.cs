using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Protocols;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.IdentityModel.Tokens;
using HttpRequestData = Microsoft.Azure.Functions.Worker.Http.HttpRequestData;

namespace Bsc.Function.Common.Authentication;

public interface IRequestAuthenticator
{
    Task<bool> IsAuthenticatedAsync(HttpRequestData? request);
}

public class RequestAuthenticator : IRequestAuthenticator
{
    private readonly IAuthConfiguration _config;
    private readonly ConfigurationManager<OpenIdConnectConfiguration> _manager;

    public RequestAuthenticator(IAuthConfiguration config, ConfigurationManager<OpenIdConnectConfiguration> manager)
    {
        _config = config;
        _manager = manager;
    }

    public async Task<bool> IsAuthenticatedAsync(HttpRequestData? request)
    {
        if (!TryGetTokenFromRequest(request, out var token))
            return false;

        return await ValidateTokenAsync(token).ConfigureAwait(false);
    }

    private static bool TryGetTokenFromRequest(HttpRequestData? request, out string token)
    {
        token = "";
        if (request == null)
            return false;

        if (!request.Headers.TryGetValues("Authorization", out var authorizationValues))
            return false;

        var authorization = authorizationValues.Single();
        if (!authorization.Contains("Bearer", StringComparison.OrdinalIgnoreCase))
            return false;

        var authorizationParts = authorization.Split(" ");
        if (authorizationParts.Length != 2)
            return false;

        token = authorizationParts[1];
        return true;
    }

    private async Task<bool> ValidateTokenAsync(string token)
    {
        var handler = new JwtSecurityTokenHandler();
        var parameters = new TokenValidationParameters
        {
            ConfigurationManager = _manager,
            ValidAudiences = new []{_config.Audience}
        };
        var result = await handler.ValidateTokenAsync(token, parameters).ConfigureAwait(false);
        return result.IsValid;
    }
}