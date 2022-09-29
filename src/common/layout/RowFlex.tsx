import { FC } from 'react';
import { Flex, FlexProps } from './Flex';

export type RowFlexProps = FlexProps;

export const RowFlex: FC<RowFlexProps> = ({ className, ...props }) => {
    return <Flex className={`flex-row ${className}`} {...props} />;
};
