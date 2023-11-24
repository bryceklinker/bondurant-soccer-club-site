using Microsoft.Extensions.Configuration;

namespace Bsc.Function.Common.Authentication;

public interface IAuthConfiguration
{
    string Authority { get; }
    string Audience { get; }
}

public class AuthConfiguration(IConfiguration config) : IAuthConfiguration
{
    public string Authority { get; } = config.GetValue<string>(ConfigurationKeys.AuthAuthority);
    public string Audience { get; } = config.GetValue<string>(ConfigurationKeys.AuthAudience);
}
