import {FC, PropsWithChildren} from 'react';
import {ChakraProvider, extendTheme} from '@chakra-ui/react';

export const BSC_THEME = extendTheme({
    colors: {
        brand: {
            500: '#142EC0FF'
        }
    }
});

export const BscThemeProvider: FC<PropsWithChildren> = ({children}) => {
    return (
        <ChakraProvider theme={BSC_THEME}>
            {children}
        </ChakraProvider>
    );
};
