import { BlobServiceClient } from '@azure/storage-blob';
import { QueueServiceClient } from '@azure/storage-queue';
import { BackendConfig } from './backend-config';

export type BackendContext = {
    queueClient: QueueServiceClient;
    blobClient: BlobServiceClient;
};

export function createDefaultBackendContext(): BackendContext {
    return {
        blobClient: BlobServiceClient.fromConnectionString(
            BackendConfig.storageAccountConnectionString
        ),
        queueClient: QueueServiceClient.fromConnectionString(
            BackendConfig.storageAccountConnectionString
        )
    };
}
