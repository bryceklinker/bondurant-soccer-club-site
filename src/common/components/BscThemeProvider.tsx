import {FC, PropsWithChildren} from 'react';
import {ChakraProvider, extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        brand: {
            500: '#142EC0FF'
        }
    }
});

export const BscThemeProvider: FC<PropsWithChildren> = ({children}) => {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    );
};
