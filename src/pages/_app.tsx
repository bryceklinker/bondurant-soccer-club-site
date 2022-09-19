import type {AppProps} from 'next/app';
import {BscThemeProvider, reactPlugin, Spacer} from '../common';
import {ShellFooter, ShellMainContent, ShellNavbar} from '../shell';
import {AppInsightsContext} from '@microsoft/applicationinsights-react-js';

import './_app.css';

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
