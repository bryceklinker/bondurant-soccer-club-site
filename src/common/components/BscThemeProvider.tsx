import React, {FunctionComponent} from 'react';
import {createTheme, ThemeProvider} from '@fluentui/react';

const theme = createTheme({
    palette: {
        themePrimary: '#142EC0FF'
    }
});

export const BscThemeProvider: FunctionComponent = ({children}) => {
    return (
        <ThemeProvider theme={theme} style={{height: '100%'}}>
            {children}
        </ThemeProvider>
    );
};
