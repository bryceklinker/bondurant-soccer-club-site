import { AzureFunction, Context } from '@azure/functions';
import { setupEnv } from '../src/setup-env';
import { updateAlertsBlob } from '../src/alerts/update-alerts-blob';
import { createDefaultBackendContext } from '../src/common/backend-context';

setupEnv();
const queueTrigger: AzureFunction = async function (
    context: Context,
    alertJson: string
): Promise<void> {
    await updateAlertsBlob(alertJson, createDefaultBackendContext());
};

export default queueTrigger;
