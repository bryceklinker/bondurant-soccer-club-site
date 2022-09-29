import { FC } from 'react';
import { FlexProps, Flex } from './Flex';

export type ColumnFlexProps = FlexProps;

export const ColumnFlex: FC<ColumnFlexProps> = ({ className, ...props }) => {
    return <Flex className={`flex-col ${className}`} {...props} />;
};
