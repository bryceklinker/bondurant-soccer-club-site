import {FC, PropsWithChildren} from 'react';
import {Divider as ChakraDivider} from '@chakra-ui/react';

export const Divider: FC<PropsWithChildren> = ({children}) => {
    return <ChakraDivider>{children}</ChakraDivider>
}
