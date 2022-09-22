import React from 'react';
import { Root, Routes } from 'react-static';
import { BscThemeProvider, Spacer } from '../common';
import { ShellNavbar, ShellMainContent, ShellFooter } from './components';
import { Router } from '@reach/router';
import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';
import { reactPlugin } from '../common';
import './Shell.css';

export const Shell = () => {
    return (
        <Root>
            <AppInsightsContext.Provider value={reactPlugin}>
                <BscThemeProvider>
                    <ShellNavbar />
                    <ShellMainContent>
                        <Router className={'flex'}>
                            <Routes path='*' />
                        </Router>
                    </ShellMainContent>
                    <Spacer />
                    <ShellFooter />
                </BscThemeProvider>
            </AppInsightsContext.Provider>
        </Root>
    );
};

export default Shell;
