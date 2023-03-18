import { FC, PropsWithChildren } from 'react';
import { LayoutMainContent } from './LayoutMainContent';
import { LayoutFooter } from './footer/LayoutFooter';
import { LayoutNavbar } from './navigation/LayoutNavbar';
import { ColumnFlex } from './ColumnFlex';
import { AlertsPanel } from '../../components/alerts/AlertsPanel';
import { AuthProvider } from '../auth/AuthProvider';

export type LayoutProps = PropsWithChildren & {};

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <AuthProvider>
            <ColumnFlex>
                <LayoutNavbar />
                <AlertsPanel />
                <LayoutMainContent>{children}</LayoutMainContent>
                <LayoutFooter />
            </ColumnFlex>
        </AuthProvider>
    );
};
