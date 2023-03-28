using Bsc.Function.Alerts.Config;
using Bsc.Function.Common.Authentication;
using FluentValidation;
using Microsoft.Extensions.Azure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Protocols;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;

namespace Bsc.Function.Common;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddBscFunctionServices(this IServiceCollection services, IConfiguration config)
    {
        var alertsConfig = new AlertsConfiguration(config);
        var authConfig = new AuthConfiguration(config);
        services.AddSingleton<IAlertsConfiguration>(alertsConfig);
        services.AddSingleton<IAuthConfiguration>(authConfig);
        services.AddSingleton<ConfigurationManager<OpenIdConnectConfiguration>>(p =>
        {
            var metadataAddress = $"{authConfig.Authority}/.well-known/openid-configuration";
            return new ConfigurationManager<OpenIdConnectConfiguration>(metadataAddress, new OpenIdConnectConfigurationRetriever());
        });
        services.AddTransient<IRequestAuthenticator, RequestAuthenticator>();
        
        services.AddValidatorsFromAssemblyContaining<Program>();
        services.AddMediatR(cfg =>
            cfg.RegisterServicesFromAssemblyContaining<Program>()
                .AddOpenBehavior(typeof(ValidationPipelineBehavior<,>))
        );
        services.AddAzureClients(b =>
        {
            b.AddBlobServiceClient(alertsConfig.ConnectionString);
            b.AddQueueServiceClient(alertsConfig.ConnectionString);
        });
        services.AddTransient<IRepositoryFactory, RepositoryFactory>();
        return services;
    }
}