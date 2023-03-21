import {
    BlobServiceClient,
    ContainerClient,
    BlobClient
} from '@azure/storage-blob';
import { createStorageAccountConnectionString } from './storage-account-connection-string-factory';

export class FakeBlobClient extends BlobClient {
    constructor(
        private readonly connectionString: string,
        containerName: string,
        blobName: string
    ) {
        super(connectionString, containerName, blobName);
    }
}

export class FakeContainerClient extends ContainerClient {
    private readonly _blobs: Record<string, FakeBlobClient>;
    constructor(
        private readonly connectionString: string,
        containerName: string
    ) {
        super(connectionString, containerName);
    }

    getBlobClient(blobName: string): BlobClient {
        return blobName in this._blobs
            ? this._blobs[blobName]
            : (this._blobs[blobName] = new FakeBlobClient(
                  this.connectionString,
                  this.containerName,
                  blobName
              ));
    }
}

export class FakeBlobServiceClient extends BlobServiceClient {
    private readonly _containers: Record<string, FakeContainerClient>;
    constructor(
        private readonly connectionString = createStorageAccountConnectionString()
    ) {
        super(connectionString);
        this._containers = {};
    }

    getContainerClient(containerName: string): ContainerClient {
        return containerName in this._containers
            ? this._containers[containerName]
            : (this._containers[containerName] = new FakeContainerClient(
                  this.connectionString,
                  containerName
              ));
    }
}
