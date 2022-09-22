import { Flex } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

export type LayoutMainContentProps = PropsWithChildren;
export const LayoutMainContent: FC<LayoutMainContentProps> = ({ children }) => {
    return (
        <Flex direction={'column'} flex={1}>
            {children}
        </Flex>
    );
};
