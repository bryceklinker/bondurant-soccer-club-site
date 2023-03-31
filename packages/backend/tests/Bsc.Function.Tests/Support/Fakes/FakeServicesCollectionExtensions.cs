using Azure.Storage.Blobs;
using Azure.Storage.Queues;
using Bsc.Function.Tests.Support.Fakes.AzureStorage.Blobs;
using Bsc.Function.Tests.Support.Fakes.AzureStorage.Queues;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.IdentityModel.Protocols;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;

namespace Bsc.Function.Tests.Support.Fakes;

public static class FakeServicesCollectionExtensions
{
    public static IServiceCollection AddBscFakeServices(this IServiceCollection services)
    {
        services.RemoveAll(typeof(QueueServiceClient));
        services.AddSingleton<FakeQueueServiceClient>();
        services.AddSingleton<QueueServiceClient>(
            p => p.GetRequiredService<FakeQueueServiceClient>()
        );

        services.RemoveAll(typeof(BlobServiceClient));
        services.AddSingleton<FakeBlobServiceClient>();
        services.AddSingleton<BlobServiceClient>(
            p => p.GetRequiredService<FakeBlobServiceClient>()
        );

        services.RemoveAll(typeof(ConfigurationManager<OpenIdConnectConfiguration>));
        services.AddSingleton<FakeConfigurationManager>();
        services.AddSingleton<ConfigurationManager<OpenIdConnectConfiguration>>(
            p => p.GetRequiredService<FakeConfigurationManager>()
        );
        return services;
    }
}
