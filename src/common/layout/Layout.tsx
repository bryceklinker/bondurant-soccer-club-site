import { initializeTelemetry, reactPlugin } from '../telemetry';
import { FC, PropsWithChildren } from 'react';
import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';
import { LayoutMainContent } from './LayoutMainContent';
import { Spacer } from '../components';
import { LayoutFooter } from './footer/LayoutFooter';
import { LayoutNavbar } from './navigation/LayoutNavbar';
import { LayoutNavPanel } from './navigation/LayoutNavPanel';

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