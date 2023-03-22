import { BackendContext } from '../common/backend-context';
import { FakeBlobServiceClient } from './fakes/fake-blob-service-client';
import { FakeQueueServiceClient } from './fakes/fake-queue-service-client';
import winston from 'winston';

export function createTestingBackendContext(
    context?: Partial<BackendContext>
): BackendContext {
    return {
        logger: winston.createLogger(),
        blobClient: context?.blobClient ?? new FakeBlobServiceClient(),
        queueClient: context?.queueClient ?? new FakeQueueServiceClient()
    };
}
