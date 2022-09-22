import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
import { globalHistory } from '@reach/router';

export const reactPlugin = new ReactPlugin();
export const insights = new ApplicationInsights({
    config: {
        instrumentationKey: process.env.APP_INSIGHTS_KEY || '',
        extensions: [reactPlugin],
        extensionConfig: {
            [reactPlugin.identifier]: { history: globalHistory }
        }
    }
});
insights.loadAppInsights();
