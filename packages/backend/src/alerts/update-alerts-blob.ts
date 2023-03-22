import path from 'path';
import fs from 'fs';
import { v4 as uuid } from 'uuid';
import { BackendContext } from '../common/backend-context';
import { BackendConfig } from '../common/backend-config';

export async function updateAlertsBlob(
    alertJson: string,
    context: BackendContext
) {
    const blockBlobClient = context.blobClient
        .getContainerClient(BackendConfig.siteContainerName)
        .getBlockBlobClient(`${BackendConfig.dbBlobPrefix}/alerts.json`);
    const tempFilePath = path.resolve(__dirname, 'alerts.json');
    try {
        const alert = JSON.parse(alertJson);
        if (await blockBlobClient.exists()) {
            await blockBlobClient.downloadToFile(tempFilePath);
        }

        let alerts = [];
        if (fs.existsSync(tempFilePath)) {
            const fileContents = await fs.promises.readFile(tempFilePath, {
                encoding: 'utf8'
            });
            alerts = JSON.parse(fileContents) as Record<string, unknown>[];
        }

        const updatedAlerts = [...alerts, { ...alert, id: uuid() }];
        await fs.promises.writeFile(
            tempFilePath,
            JSON.stringify(updatedAlerts)
        );
        await blockBlobClient.uploadFile(tempFilePath);
    } finally {
        if (fs.existsSync(tempFilePath)) {
            await fs.promises.unlink(tempFilePath);
        }
    }
}
