using System.Threading;
using System.Threading.Tasks;
using Azure.Storage.Blobs;
using Bsc.Function.Alerts.Config;
using Bsc.Function.Alerts.Models;

namespace Bsc.Function.Common;

public interface IRepositoryFactory
{
    Task<IRepository<AlertModel>> CreateAlertsRepositoryAsync(
        CancellationToken cancellationToken = default
    );
}

public class RepositoryFactory : IRepositoryFactory
{
    private readonly BlobServiceClient _blobServiceClient;
    private readonly IAlertsConfiguration _alertsConfiguration;

    public RepositoryFactory(
        IAlertsConfiguration alertsConfiguration,
        BlobServiceClient blobServiceClient
    )
    {
        _alertsConfiguration = alertsConfiguration;
        _blobServiceClient = blobServiceClient;
    }

    public Task<IRepository<AlertModel>> CreateAlertsRepositoryAsync(
        CancellationToken cancellationToken = default
    )
    {
        var repository = new BlobStorageRepository<AlertModel>(
            _blobServiceClient,
            _alertsConfiguration.SiteContainerName,
            _alertsConfiguration.BlobPath
        );
        return Task.FromResult<IRepository<AlertModel>>(repository);
    }
}
