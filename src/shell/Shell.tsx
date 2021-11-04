import React from 'react';
import {Root, Routes} from 'react-static';
import {BscThemeProvider} from '../common';
import {ShellNavbar, ShellMainContent, ShellFooter} from './components';
import {Router} from '@reach/router';

export const Shell = () => {
    return (
        <Root>
            <BscThemeProvider>
                <ShellNavbar/>
                <ShellMainContent>
                    <Router>
                        <Routes path="*"/>
                    </Router>
                </ShellMainContent>
                <ShellFooter/>
            </BscThemeProvider>
        </Root>
    );
};

export default Shell;
