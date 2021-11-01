import React from 'react';
import {Root, Routes} from 'react-static';
import {MediaContextProvider} from '../common';
import {ShellNavbar} from './ShellNavbar';
import {ShellMainContent} from './ShellMainContent';
import {Router} from '@reach/router';
import {ShellFooter} from './ShellFooter';

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

                    <ShellFooter />
                </ShellNavbar>
            </MediaContextProvider>
        </Root>
    );
};

export default Shell;
