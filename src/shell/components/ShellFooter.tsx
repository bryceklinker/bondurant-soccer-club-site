import React, {FunctionComponent} from 'react';
import {Copyright, SocialMediaFooter} from './index';
import {Spacer} from '../../common';
import {Stack} from '@fluentui/react';

import './ShellFooter.css';

export const ShellFooter: FunctionComponent = () => {
    return (
        <Stack horizontal className={'shell-footer'} verticalAlign={'center'}>
            <Copyright/>
            <Spacer/>
            <SocialMediaFooter/>
        </Stack>
    );
};
