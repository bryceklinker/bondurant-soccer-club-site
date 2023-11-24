using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Protocols;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.IdentityModel.Tokens;
using HttpRequestData = Microsoft.Azure.Functions.Worker.Http.HttpRequestData;

namespace Bsc.Function.Common.Authentication;

public interface IRequestAuthenticator
{
    Task<bool> IsAuthenticatedAsync(HttpRequestData? request);
}

public class RequestAuthenticator(IAuthConfiguration config,
        ConfigurationManager<OpenIdConnectConfiguration> manager,
        ILoggerFactory loggerFactory)
    : IRequestAuthenticator
{
    private readonly ILogger _logger = loggerFactory.CreateLogger<RequestAuthenticator>();

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
        var openIdConfig = await manager.GetConfigurationAsync();
        var parameters = new TokenValidationParameters
        {
            ValidIssuers = new[] { openIdConfig.Issuer },
            IssuerSigningKeys = openIdConfig.SigningKeys,
            ValidAudiences = new[] { config.Audience }
        };
        var result = await handler.ValidateTokenAsync(token, parameters).ConfigureAwait(false);
        if (!result.IsValid)
            _logger.LogError("token validation failed: {Exception}", result.Exception);

        return result.IsValid;
    }
}
