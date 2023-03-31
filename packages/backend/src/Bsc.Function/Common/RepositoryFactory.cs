using System.Threading;
using System.Threading.Tasks;
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

public class RepositoryFactory : IRepositoryFactory
{
    private readonly BlobServiceClient _blobServiceClient;
    private readonly ILoggerFactory _loggerFactory;
    private readonly IAlertsConfiguration _alertsConfiguration;

    public RepositoryFactory(
        IAlertsConfiguration alertsConfiguration,
        BlobServiceClient blobServiceClient,
        ILoggerFactory loggerFactory
    )
    {
        _alertsConfiguration = alertsConfiguration;
        _blobServiceClient = blobServiceClient;
        _loggerFactory = loggerFactory;
    }

    public Task<IRepository<AlertModel>> CreateAlertsRepositoryAsync(
        CancellationToken cancellationToken = default
    )
    {
        var repository = new BlobStorageRepository<AlertModel>(
            _blobServiceClient,
            _alertsConfiguration.SiteContainerName,
            _alertsConfiguration.BlobPath,
            _loggerFactory.CreateLogger<BlobStorageRepository<AlertModel>>()
        );
        return Task.FromResult<IRepository<AlertModel>>(repository);
    }
}
