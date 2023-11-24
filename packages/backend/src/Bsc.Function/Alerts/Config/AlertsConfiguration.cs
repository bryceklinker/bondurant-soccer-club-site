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

public class AlertsConfiguration(IConfiguration config) : IAlertsConfiguration
{
    public string ConnectionString { get; } =
        config.GetValue<string>(ConfigurationKeys.StorageAccountConnectionString);

    public string SiteContainerName { get; } =
        config.GetValue<string>(ConfigurationKeys.SiteContainerName);
    public string QueueName { get; } = config.GetValue<string>(ConfigurationKeys.AlertsQueueName);
    public string BlobPath { get; } =
        Path.Join(config.GetValue<string>(ConfigurationKeys.DbBlobPrefix), "alerts.json");
}
