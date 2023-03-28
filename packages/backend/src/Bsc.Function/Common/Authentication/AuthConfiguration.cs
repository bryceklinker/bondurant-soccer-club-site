using Microsoft.Extensions.Configuration;

namespace Bsc.Function.Common.Authentication;

public interface IAuthConfiguration
{
    string Authority { get; }
    string Audience { get; }
}

public class AuthConfiguration : IAuthConfiguration
{
    public string Authority { get; }
    public string Audience { get; }

    public AuthConfiguration(IConfiguration config)
    {
        Authority = config.GetValue<string>(ConfigurationKeys.AuthAuthority);
        Audience = config.GetValue<string>(ConfigurationKeys.AuthAudience);
    }
}