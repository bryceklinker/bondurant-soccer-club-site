import fs from 'fs';
import {
    BlobServiceClient,
    ContainerClient,
    BlockBlobClient,
    BlobExistsOptions,
    BlobDownloadOptions,
    BlobDownloadResponseParsed,
    BlockBlobParallelUploadOptions,
    BlobUploadCommonResponse
} from '@azure/storage-blob';
import { createStorageAccountConnectionString } from './storage-account-connection-string-factory';

export class FakeBlockBlobClient extends BlockBlobClient {
    private _buffer: Buffer | null;

    get buffer() {
        if (this._buffer) return Buffer.from(this._buffer);
        return Buffer.from([]);
    }

    constructor(
        private readonly connectionString: string,
        containerName: string,
        blobName: string
    ) {
        super(connectionString, containerName, blobName);
        this._buffer = null;
    }

    exists(options?: BlobExistsOptions): Promise<boolean> {
        return Promise.resolve(this._buffer !== null);
    }

    async uploadFile(
        filePath: string,
        options?: BlockBlobParallelUploadOptions
    ): Promise<BlobUploadCommonResponse> {
        this._buffer = await fs.promises.readFile(filePath);
        return {
            _response: {} as never
        };
    }

    async downloadToFile(
        filePath: string,
        offset?: number,
        count?: number,
        options?: BlobDownloadOptions
    ): Promise<BlobDownloadResponseParsed> {
        await fs.promises.writeFile(filePath, this._buffer);
        return {
            blobType: 'BlockBlob',
            _response: {} as never,
            metadata: {} as never
        };
    }
}

export class FakeContainerClient extends ContainerClient {
    private readonly _blobs: Record<string, FakeBlockBlobClient>;
    constructor(
        private readonly connectionString: string,
        containerName: string
    ) {
        super(connectionString, containerName);
        this._blobs = {};
    }

    getBlockBlobClient(blobName: string): BlockBlobClient {
        return blobName in this._blobs
            ? this._blobs[blobName]
            : (this._blobs[blobName] = new FakeBlockBlobClient(
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
