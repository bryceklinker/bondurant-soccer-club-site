import { Flex, FlexProps } from '@chakra-ui/react';
import { FC } from 'react';

export type ColumnFlexProps = Omit<FlexProps, 'direction' | 'flexDirection'>;
export const ColumnFlex: FC<ColumnFlexProps> = ({ flex = 1, ...props }) => {
    return <Flex direction={'column'} flex={flex} {...props} />;
};
