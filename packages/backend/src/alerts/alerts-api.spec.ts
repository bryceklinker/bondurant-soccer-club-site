import {
    startTestingRestApi,
    TestingRestApi
} from '../testing/start-testing-rest-api';
import axios from 'axios';
import {
    FakeQueueClient,
    FakeQueueServiceClient
} from '../testing/fakes/fake-queue-service-client';
import { BackendConfig } from '../common/backend-config';

describe('Alerts Api', () => {
    let queueClient: FakeQueueClient;
    let api: TestingRestApi;

    beforeEach(async () => {
        const queueServiceClient = new FakeQueueServiceClient();
        queueClient = queueServiceClient.getQueueClient(
            BackendConfig.alertsQueueName
        ) as FakeQueueClient;
        api = await startTestingRestApi({ queueClient: queueServiceClient });
    });

    test('when alert is posted then message is placed on queue', async () => {
        const alert = { text: 'hello', severity: 'High' };

        const response = await axios.post(`${api.baseUrl}/alerts`, alert);

        expect(response.status).toEqual(200);
        expect(queueClient.sentMessages).toHaveLength(1);
        expect(JSON.parse(queueClient.sentMessages[0])).toEqual(alert);
    });

    test('when alert is put then message is placed on queue', async () => {
        const alert = { text: 'hello', severity: 'High', id: '444' };

        const response = await axios.put(`${api.baseUrl}/alerts/777`, alert);

        expect(response.status).toEqual(200);
        expect(queueClient.sentMessages).toHaveLength(1);
        expect(JSON.parse(queueClient.sentMessages[0])).toEqual({
            ...alert,
            id: '777'
        });
    });

    afterEach(async () => {
        await api.server.close();
    });
});
