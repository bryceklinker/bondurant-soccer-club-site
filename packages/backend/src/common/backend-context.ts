import { BlobServiceClient } from '@azure/storage-blob';
import { QueueServiceClient } from '@azure/storage-queue';
import { BackendConfig } from './backend-config';
import winston from 'winston';

export type BackendContext = {
    logger: winston.Logger;
    queueClient: QueueServiceClient;
    blobClient: BlobServiceClient;
};

export function createDefaultBackendContext(): BackendContext {
    return {
        logger: winston.createLogger({
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.ms(),
                winston.format.splat(),
                winston.format.json()
            ),
            transports: [new winston.transports.Console()]
        }),
        blobClient: BlobServiceClient.fromConnectionString(
            BackendConfig.storageAccountConnectionString
        ),
        queueClient: QueueServiceClient.fromConnectionString(
            BackendConfig.storageAccountConnectionString
        )
    };
}
