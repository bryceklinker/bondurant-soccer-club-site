import { GatsbyBrowser } from 'gatsby';
import './src/index.css';
import {
    initializeTelemetry,
    reactPlugin
} from './src/common/telemetry/initialize-telemetry';
import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';

initializeTelemetry();
export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
    element
}) => {
    return (
        <AppInsightsContext.Provider value={reactPlugin}>
            {element}
        </AppInsightsContext.Provider>
    );
};
