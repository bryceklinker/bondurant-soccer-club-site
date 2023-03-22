import appInsights from 'applicationinsights';
import { BackendConfig } from './common/backend-config';
export function setupEnv() {
    appInsights
        .setup(BackendConfig.applicationInsightsConnectionString)
        .start();
}
