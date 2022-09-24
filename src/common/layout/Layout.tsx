import { FC, PropsWithChildren } from 'react';
import { LayoutMainContent } from './LayoutMainContent';
import { LayoutFooter } from './footer/LayoutFooter';
import { LayoutNavbar } from './navigation/LayoutNavbar';
import { ColumnFlex } from './ColumnFlex';

export type LayoutProps = PropsWithChildren & {};

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <ColumnFlex>
            <LayoutNavbar />
            <LayoutMainContent>{children}</LayoutMainContent>
            <LayoutFooter />
        </ColumnFlex>
    );
};
