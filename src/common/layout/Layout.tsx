import { FC, PropsWithChildren } from 'react';
import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';
import { LayoutMainContent } from './LayoutMainContent';
import { LayoutFooter } from './footer/LayoutFooter';
import { LayoutNavbar } from './navigation/LayoutNavbar';
import { Spacer } from '../components/Spacer';
import {
    initializeTelemetry,
    reactPlugin
} from '../telemetry/initialize-telemetry';

initializeTelemetry();

export type LayoutProps = PropsWithChildren & {};

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <AppInsightsContext.Provider value={reactPlugin}>
            <>
                <LayoutNavbar />
                <LayoutMainContent>{children}</LayoutMainContent>
                <Spacer />
                <LayoutFooter />
            </>
        </AppInsightsContext.Provider>
    );
};
