import React, { FunctionComponent } from 'react';
import { Stack, createTheme, ThemeProvider } from '@fluentui/react';
import './BscThemeProvider.css';

const theme = createTheme({
    palette: {
        themePrimary: '#142EC0FF'
    },
    defaultFontStyle: {
        fontFamily:
            'Lato, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, "Roboto", "Helvetica Neue", sans-serif'
    }
});

export const BscThemeProvider: FunctionComponent = ({ children }) => {
    return (
        <ThemeProvider theme={theme} as={Stack} className={'theme-provider'}>
            {children}
        </ThemeProvider>
    );
};
