import { FC, PropsWithChildren, useMemo } from 'react';
import { LayoutMainContent } from './LayoutMainContent';
import { LayoutFooter } from './footer/LayoutFooter';
import { LayoutNavbar } from './navigation/LayoutNavbar';
import { ColumnFlex } from './ColumnFlex';
import { AlertsPanel } from '../../components/alerts/AlertsPanel';
import { AuthProvider } from '../auth/AuthProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

export type LayoutProps = PropsWithChildren & {};

export const Layout: FC<LayoutProps> = ({ children }) => {
    const client = useMemo(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchInterval: false,
                        refetchIntervalInBackground: false
                    }
                }
            }),
        []
    );
    return (
        <QueryClientProvider client={client}>
            <AuthProvider>
                <ColumnFlex>
                    <LayoutNavbar />
                    <AlertsPanel />
                    <LayoutMainContent>{children}</LayoutMainContent>
                    <LayoutFooter />
                </ColumnFlex>
            </AuthProvider>
        </QueryClientProvider>
    );
};
