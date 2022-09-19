import {FC, PropsWithChildren} from 'react';
import {Heading} from '@chakra-ui/react';

export const Title: FC<PropsWithChildren> = ({children}) => {
    return <Heading as={'h3'} size={'2xl'}>{children}</Heading>
}
