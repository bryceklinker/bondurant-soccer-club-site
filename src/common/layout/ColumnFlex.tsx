import { FC } from 'react';
import { FlexProps, Flex } from './Flex';

export type ColumnFlexProps = Omit<FlexProps, 'direction'>;

export const ColumnFlex: FC<ColumnFlexProps> = props => {
    return <Flex direction={'col'} {...props} />;
};
