import { FC } from 'react';
import { Flex, FlexProps } from './Flex';

export type RowFlexProps = Omit<FlexProps, 'direction'>;

export const RowFlex: FC<RowFlexProps> = props => {
    return <Flex direction={'row'} {...props} />;
};
