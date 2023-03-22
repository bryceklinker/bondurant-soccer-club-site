import { updateAlertsBlob } from './update-alerts-blob';
import { FakeBlockBlobClient } from '../testing/fakes/fake-blob-service-client';
import { BackendContext } from '../common/backend-context';
import { createTestingBackendContext } from '../testing/create-testing-backend-context';
import { BackendConfig } from '../common/backend-config';

describe('updateAlertsBlob', () => {
    let blobClient: FakeBlockBlobClient;
    let context: BackendContext;

    beforeEach(() => {
        context = createTestingBackendContext();
        blobClient = context.blobClient
            .getContainerClient(BackendConfig.siteContainerName)
            .getBlockBlobClient(
                `${BackendConfig.dbBlobPrefix}/alerts.json`
            ) as FakeBlockBlobClient;
    });

    test('when alert is missing id then adds alert to file', async () => {
        const alert = JSON.stringify({ text: 'ditto', severity: 'High' });
        await updateAlertsBlob(alert, context);

        const alerts = JSON.parse(blobClient.buffer.toString('utf8'));
        expect(alerts).toHaveLength(1);
        expect(alerts).toContainEqual({
            text: 'ditto',
            severity: 'High',
            id: expect.any(String)
        });
    });
});
