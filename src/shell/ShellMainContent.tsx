import {Flex} from '@chakra-ui/react';
import {FC, PropsWithChildren} from 'react';

export const ShellMainContent: FC<PropsWithChildren> = ({children}) => {
    return (
        <Flex flex={1} direction={'column'} flexGrow={1} className={`main-content flex`}>
            {children}
        </Flex>
    );
};
