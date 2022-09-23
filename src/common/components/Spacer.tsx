import { FC } from 'react';
import { ColumnFlex, RowFlex } from '../layout';

export type SpacerProps = {
    vertical?: boolean;
};

export const Spacer: FC<SpacerProps> = ({ vertical }) => {
    const Element = vertical ? ColumnFlex : RowFlex;
    return <Element />;
};
