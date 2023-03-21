import {
    QueueServiceClient,
    QueueClient,
    QueueSendMessageOptions,
    QueueSendMessageResponse
} from '@azure/storage-queue';
import { faker } from '@faker-js/faker';
import { createStorageAccountConnectionString } from './storage-account-connection-string-factory';

export class FakeQueueClient extends QueueClient {
    private readonly _sentMessages: string[];

    get sentMessages(): string[] {
        return [...this._sentMessages];
    }

    constructor(connectionString: string, queueName: string) {
        super(connectionString, queueName);
        this._sentMessages = [];
    }

    sendMessage(
        messageText: string,
        options?: QueueSendMessageOptions
    ): Promise<QueueSendMessageResponse> {
        this._sentMessages.push(messageText);
        return Promise.resolve({
            messageId: faker.datatype.uuid(),
            insertedOn: new Date(),
            expiresOn: new Date(),
            popReceipt: faker.datatype.uuid(),
            nextVisibleOn: new Date(),
            _response: {} as never
        });
    }
}

export class FakeQueueServiceClient extends QueueServiceClient {
    private readonly _queues: Record<string, FakeQueueClient>;

    constructor(
        private readonly connectionString = createStorageAccountConnectionString()
    ) {
        super(connectionString);
        this._queues = {};
    }

    getQueueClient(queueName: string): QueueClient {
        return queueName in this._queues
            ? this._queues[queueName]
            : (this._queues[queueName] = new FakeQueueClient(
                  this.connectionString,
                  queueName
              ));
    }
}
