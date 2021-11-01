import React from 'react';
import {Root, Routes} from 'react-static';
import {MediaContextProvider} from '../common';
import {ShellNavbar} from './ShellNavbar';
import {ShellMainContent} from './ShellMainContent';
import {Router} from '@reach/router';

export const Shell = () => {
    return (
        <Root>
            <MediaContextProvider>
                <ShellNavbar>
                    <ShellMainContent>
                        <Router>
                            <Routes path="*"/>
                        </Router>
                    </ShellMainContent>
                </ShellNavbar>
            </MediaContextProvider>
        </Root>
    );
};

export default Shell;
