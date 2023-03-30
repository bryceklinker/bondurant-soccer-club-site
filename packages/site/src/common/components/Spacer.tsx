import { FC } from 'react';
import { ColumnFlex } from '../layout/ColumnFlex';
import { RowFlex } from '../layout/RowFlex';
import { FlexProps } from '../layout/Flex';

export type SpacerProps = FlexProps & {
    vertical?: boolean;
};

export const Spacer: FC<SpacerProps> = ({ vertical, ...props }) => {
    const Element = vertical ? ColumnFlex : RowFlex;
    return <Element {...props} />;
};
