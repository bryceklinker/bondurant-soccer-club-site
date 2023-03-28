using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Bsc.Function.Common;
using Bsc.Function.Common.Authentication;
using Bsc.Function.Tests.Support.Fakes;
using MediatR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace Bsc.Function.Tests.Support;

public class BscFixture
{
    public IServiceProvider Provider { get; }

    public IConfiguration Configuration { get; }

    public IMediator Mediator => GetService<IMediator>();

    public FakeBlockBlobClient AlertsBlobClient =>
        GetService<FakeBlobServiceClient>()
            .GetFakeBlobContainerClient("$web")
            .GetFakeBlockBlobClient("db/alerts.json");

    public BscFixture()
    {
        Configuration = new ConfigurationBuilder()
            .AddInMemoryCollection(
                new[]
                {
                    new KeyValuePair<string, string>(
                        ConfigurationKeys.AlertsQueueName,
                        "alerts-queue"
                    ),
                    new KeyValuePair<string, string>(
                        ConfigurationKeys.StorageAccountConnectionString,
                        "UseDevelopmentStorage=true"
                    ),
                    new KeyValuePair<string, string>(ConfigurationKeys.DbBlobPrefix, "db"),
                    new KeyValuePair<string, string>(ConfigurationKeys.SiteContainerName, "$web"),
                    new KeyValuePair<string, string>(
                        ConfigurationKeys.AuthAudience,
                        "https://data.com"
                    ),
                    new KeyValuePair<string, string>(
                        ConfigurationKeys.AuthAuthority,
                        "https://authority.com"
                    ),
                }
            )
            .Build();

        Provider = new ServiceCollection()
            .AddBscFunctionServices(Configuration)
            .AddBscFakeServices()
            .BuildServiceProvider();
    }

    public T GetService<T>()
        where T : notnull => Provider.GetRequiredService<T>();

    public string GenerateToken()
    {
        var handler = new JwtSecurityTokenHandler();
        var signingKey = FakeConfigurationManager.SigningKey;
        var authConfig = GetService<IAuthConfiguration>();
        var signingCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha512);
        var token = handler.CreateJwtSecurityToken(
            authConfig.Authority,
            authConfig.Audience,
            new ClaimsIdentity(),
            signingCredentials: signingCredentials
        );
        return token.RawData;
    }
}
