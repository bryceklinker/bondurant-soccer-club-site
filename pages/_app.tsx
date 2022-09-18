import {initializeIcons} from '@fluentui/font-icons-mdl2';
import {BscThemeProvider, reactPlugin, Spacer} from '../src/common';
import {ShellFooter, ShellMainContent, ShellNavbar} from '../src/shell/components';
import {AppInsightsContext} from '@microsoft/applicationinsights-react-js';
import React from 'react';

initializeIcons();

export default function FluentUIApp({Component, pageProps}) {
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
