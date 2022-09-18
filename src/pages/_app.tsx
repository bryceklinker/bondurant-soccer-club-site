import type {AppProps} from 'next/app'
import {initializeIcons} from '@fluentui/font-icons-mdl2';
import {BscThemeProvider, reactPlugin, Spacer} from '../common';
import {ShellFooter, ShellMainContent, ShellNavbar} from '../shell';
import {AppInsightsContext} from '@microsoft/applicationinsights-react-js';
import from 'react';

import './_app.css';

initializeIcons();

export default function FluentUIApp({Component, pageProps}: AppProps) {
    return (
        <AppInsightsContext.Provider value={reactPlugin}>
            <BscThemeProvider>
                <ShellNavbar/>
                <ShellMainContent>
                    <Component {...pageProps} />
                </ShellMainContent>
                <Spacer/>
                <ShellFooter/>
            </BscThemeProvider>
        </AppInsightsContext.Provider>
    );
}