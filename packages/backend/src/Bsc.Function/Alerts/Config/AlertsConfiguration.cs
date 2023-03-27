using System.IO;
using Bsc.Function.Common;
using Microsoft.Extensions.Configuration;

namespace Bsc.Function.Alerts.Config;

public interface IAlertsConfiguration
{
    string ConnectionString { get; }
    string SiteContainerName { get; }
    string QueueName { get; }
    string BlobPath { get; }
}

public class AlertsConfiguration : IAlertsConfiguration
{
    public string ConnectionString { get; }
    public string SiteContainerName { get; }
    public string QueueName { get; }
    public string BlobPath { get; }

    public AlertsConfiguration(IConfiguration config)
    {
        ConnectionString = config.GetValue<string>(ConfigurationKeys.StorageAccountConnectionString);
        SiteContainerName = config.GetValue<string>(ConfigurationKeys.SiteContainerName);
        QueueName = config.GetValue<string>(ConfigurationKeys.AlertsQueueName);
        BlobPath = Path.Join(config.GetValue<string>(ConfigurationKeys.DbBlobPrefix), "alerts.json");
    }
}