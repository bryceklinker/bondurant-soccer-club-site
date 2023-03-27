using Bsc.Function.Alerts.Config;
using MediatR;
using Microsoft.Extensions.Azure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Bsc.Function.Common;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddBscFunctionServices(this IServiceCollection services, IConfiguration config)
    {
        var alertsConfig = new AlertsConfiguration(config);
        services.AddSingleton<IAlertsConfiguration>(alertsConfig);
        services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<Program>());
        services.AddAzureClients(b =>
        {
            b.AddBlobServiceClient(alertsConfig.ConnectionString);
            b.AddQueueServiceClient(alertsConfig.ConnectionString);
        });
        services.AddTransient<IRepositoryFactory, RepositoryFactory>();
        return services;
    }
}