using Azure.Storage.Blobs;
using Bsc.Function.Alerts.Config;
using Bsc.Function.Alerts.Models;
using Microsoft.Extensions.Logging;

namespace Bsc.Function.Common;

public interface IRepositoryFactory
{
    Task<IRepository<AlertModel>> CreateAlertsRepositoryAsync(
        CancellationToken cancellationToken = default
    );
}

public class RepositoryFactory(
        IAlertsConfiguration alertsConfiguration,
        BlobServiceClient blobServiceClient,
        ILoggerFactory loggerFactory)
    : IRepositoryFactory
{
    public Task<IRepository<AlertModel>> CreateAlertsRepositoryAsync(
        CancellationToken cancellationToken = default
    )
    {
        var repository = new BlobStorageRepository<AlertModel>(
            blobServiceClient,
            alertsConfiguration.SiteContainerName,
            alertsConfiguration.BlobPath,
            loggerFactory.CreateLogger<BlobStorageRepository<AlertModel>>()
        );
        return Task.FromResult<IRepository<AlertModel>>(repository);
    }
}
