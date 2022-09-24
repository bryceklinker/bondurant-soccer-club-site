import { FC, PropsWithChildren } from 'react';
import { ColumnFlex } from './ColumnFlex';

export type LayoutMainContentProps = PropsWithChildren;
export const LayoutMainContent: FC<LayoutMainContentProps> = ({ children }) => {
    return (
        <ColumnFlex as={'main'} overflow={'auto'}>
            {children}
        </ColumnFlex>
    );
};
