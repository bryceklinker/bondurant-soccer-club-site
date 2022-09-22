import { FC } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

export type RowFlexProps = Omit<FlexProps, 'direction' | 'flexDirection'>;
export const RowFlex: FC<RowFlexProps> = ({ flex = 1, ...props }) => {
    return <Flex direction={'row'} flex={flex} {...props} />;
};
