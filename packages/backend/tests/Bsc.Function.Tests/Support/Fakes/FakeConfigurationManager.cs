using Bsc.Function.Common.Authentication;
using Microsoft.IdentityModel.Protocols;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.IdentityModel.Tokens;

namespace Bsc.Function.Tests.Support.Fakes;

public class FakeOpenIdConfigurationRetriever : IConfigurationRetriever<OpenIdConnectConfiguration>
{
    private readonly string _issuer;

    public FakeOpenIdConfigurationRetriever(string issuer)
    {
        _issuer = issuer;
    }

    public Task<OpenIdConnectConfiguration> GetConfigurationAsync(
        string address,
        IDocumentRetriever retriever,
        CancellationToken cancel
    )
    {
        return Task.FromResult(
            new OpenIdConnectConfiguration
            {
                Issuer = _issuer,
                SigningKeys = { FakeConfigurationManager.SigningKey }
            }
        );
    }
}

public class FakeConfigurationManager : ConfigurationManager<OpenIdConnectConfiguration>
{
    private readonly IAuthConfiguration _config;

    public static readonly SymmetricSecurityKey SigningKey = new(
        "this-is-not-a-good-enough-key-to-be-used-in-real-life-please-be-sure-to-use-a-much-better-key-for-reals"u8.ToArray()
    );

    public FakeConfigurationManager(IAuthConfiguration config)
        : base(
            $"{config.Authority}/.well-known/openid-configuration",
            new FakeOpenIdConfigurationRetriever(config.Authority)
        )
    {
        _config = config;
    }

    public override Task<BaseConfiguration> GetBaseConfigurationAsync(CancellationToken cancel)
    {
        return Task.FromResult<BaseConfiguration>(
            new OpenIdConnectConfiguration
            {
                Issuer = _config.Authority,
                SigningKeys = { SigningKey }
            }
        );
    }
}