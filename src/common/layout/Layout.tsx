import { FC, PropsWithChildren, Suspense } from 'react';
import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';
import { LayoutMainContent } from './LayoutMainContent';
import { LayoutFooter } from './footer/LayoutFooter';
import { LayoutNavbar } from './navigation/LayoutNavbar';
import {
    initializeTelemetry,
    reactPlugin
} from '../telemetry/initialize-telemetry';
import { ColumnFlex } from './ColumnFlex';

initializeTelemetry();

export type LayoutProps = PropsWithChildren & {};

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <AppInsightsContext.Provider value={reactPlugin}>
            <ColumnFlex>
                <LayoutNavbar />
                <LayoutMainContent>{children}</LayoutMainContent>
                <LayoutFooter />
            </ColumnFlex>
        </AppInsightsContext.Provider>
    );
};
