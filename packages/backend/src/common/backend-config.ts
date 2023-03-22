export const BackendConfig = {
    alertsQueueName: process.env.ALERTS_QUEUE_NAME ?? 'alerts-queue',
    storageAccountConnectionString:
        process.env.STORAGE_ACCOUNT_CONNECTION_STRING ?? '',
    siteContainerName: process.env.SITE_CONTAINER_NAME ?? '$web',
    dbBlobPrefix: process.env.DB_BLOB_PREFIX ?? 'db',
    applicationInsightsConnectionString:
        process.env.APPLICATIONINSIGHTS_CONNECTION_STRING ?? ''
};
