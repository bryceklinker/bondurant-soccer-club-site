import React, {FunctionComponent} from 'react';
import {Copyright, SocialMediaFooter} from './components';
import {Section} from '../common';

import './ShellFooter.css';
import { Stack } from '@fluentui/react';

export const ShellFooter: FunctionComponent = () => {
    return (
        <Section horizontal className={'shell-footer'} verticalAlign={'center'}>
            <Copyright/>
            <Stack grow={true} />
            <SocialMediaFooter/>
        </Section>
    );
};
