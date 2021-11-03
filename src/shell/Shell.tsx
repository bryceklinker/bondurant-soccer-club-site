import React from 'react';
import {Root, Routes} from 'react-static';
import {BscThemeProvider, Media, MediaContextProvider} from '../common';
import {ShellNavbar} from './ShellNavbar';
import {ShellMainContent} from './ShellMainContent';
import {Router} from '@reach/router';
import {ShellFooter} from './ShellFooter';

export const Shell = () => {
    return (
        <Root>
            <BscThemeProvider>
                <MediaContextProvider>
                    <ShellNavbar>
                        <ShellMainContent>
                            <Router>
                                <Routes path="*"/>
                            </Router>
                        </ShellMainContent>

                        <Media greaterThan={'mobile'}>
                            <ShellFooter/>
                        </Media>
                    </ShellNavbar>
                </MediaContextProvider>
            </BscThemeProvider>
        </Root>
    );
};

export default Shell;
