import { FC } from 'react';
import { ColumnFlex } from '../layout/ColumnFlex';
import { RowFlex } from '../layout/RowFlex';

export type SpacerProps = {
    vertical?: boolean;
};

export const Spacer: FC<SpacerProps> = ({ vertical }) => {
    const Element = vertical ? ColumnFlex : RowFlex;
    return <Element />;
};
