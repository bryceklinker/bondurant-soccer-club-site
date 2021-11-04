import React, {FunctionComponent} from 'react';
import {Copyright, SocialMediaFooter} from './index';
import {Section, Spacer} from '../../common';

import './ShellFooter.css';
export const ShellFooter: FunctionComponent = () => {
    return (
        <Section horizontal className={'shell-footer'} verticalAlign={'center'}>
            <Copyright/>
            <Spacer />
            <SocialMediaFooter/>
        </Section>
    );
};
