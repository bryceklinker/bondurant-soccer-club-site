import React, {FC, PropsWithChildren} from 'react';
import {Stack, createTheme, ThemeProvider} from '@fluentui/react';
import styles from './BscThemeProvider.module.css';

const theme = createTheme({
    palette: {
        themePrimary: '#142EC0FF'
    },
    defaultFontStyle: {
        fontFamily: 'Lato, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, "Roboto", "Helvetica Neue", sans-serif'
    }
});

export const BscThemeProvider: FC<PropsWithChildren> = ({children}) => {
    return (
        <ThemeProvider theme={theme} as={Stack} className={styles.themeProvider}>
            {children}
        </ThemeProvider>
    );
};
