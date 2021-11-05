import React from 'react';
import {Root, Routes} from 'react-static';
import {BscThemeProvider, Spacer} from '../common';
import {ShellNavbar, ShellMainContent, ShellFooter} from './components';
import {Router} from '@reach/router';
import './Shell.css';

export const Shell = () => {
    return (
        <Root>
            <BscThemeProvider>
                    <ShellNavbar/>
                    <ShellMainContent>
                        <Router className={'flex'}>
                            <Routes path="*"/>
                        </Router>
                    </ShellMainContent>
                    <Spacer />
                    <ShellFooter/>
            </BscThemeProvider>
        </Root>
    );
};

export default Shell;
