import { FC, PropsWithChildren } from 'react';
import { ColumnFlex } from './ColumnFlex';
import { AlertsPanel } from '../alerts/AlertsPanel';

export type LayoutMainContentProps = PropsWithChildren;
export const LayoutMainContent: FC<LayoutMainContentProps> = ({ children }) => {
    return <ColumnFlex className={'main'}>{children}</ColumnFlex>;
};
