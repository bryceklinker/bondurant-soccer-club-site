using Azure.Storage.Queues;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;

namespace Bsc.Function.Tests.Support.Fakes;

public static class FakeServicesCollectionExtensions
{
    public static IServiceCollection AddBscFakeServices(this IServiceCollection services)
    {
        services.RemoveAll(typeof(QueueServiceClient));
        services.AddSingleton<FakeQueueServiceClient>();
        services.AddSingleton<QueueServiceClient>(p => p.GetRequiredService<FakeQueueServiceClient>());
        return services;
    }
}