import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';

let insights: ApplicationInsights | null = null;
export function initializeTelemetry() {
    if (insights) {
        return insights;
    }

    insights = new ApplicationInsights({
        config: {
            instrumentationKey: process.env.APP_INSIGHTS_KEY || '',
            extensions: [reactPlugin],
            enableAutoRouteTracking: true
        }
    });
    insights.loadAppInsights();
}
export const reactPlugin = new ReactPlugin();
