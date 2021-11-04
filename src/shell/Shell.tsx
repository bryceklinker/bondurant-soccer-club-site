import React from 'react';
import {Root, Routes} from 'react-static';
import {BscThemeProvider} from '../common';
import {ShellNavbar, ShellMainContent, ShellFooter} from './components';
import {Router} from '@reach/router';
import {Stack} from '@fluentui/react';

export const Shell = () => {
    return (
        <Root>
            <BscThemeProvider>
                <Stack className={'flex'}>
                    <ShellNavbar/>
                    <ShellMainContent>
                        <Router className={'flex'}>
                            <Routes path="*"/>
                        </Router>
                    </ShellMainContent>
                    <ShellFooter/>
                </Stack>
            </BscThemeProvider>
        </Root>
    );
};

export default Shell;
