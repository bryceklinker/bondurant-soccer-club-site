import {ApplicationInsights} from '@microsoft/applicationinsights-web';
import {ReactPlugin} from '@microsoft/applicationinsights-react-js';

export const reactPlugin = new ReactPlugin();
export const insights = new ApplicationInsights({
    config: {
        instrumentationKey: process.env.APP_INSIGHTS_KEY || '',
        enableAutoRouteTracking: true,
        extensions: [reactPlugin]
    }
});
if (global.window !== undefined) {
    insights.loadAppInsights();
}

