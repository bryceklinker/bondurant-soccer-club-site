import {FunctionComponent} from 'react';
import {Spacer} from '../common';
import {Stack} from '@fluentui/react';
import { Copyright } from './Copyright';
import { SocialMedia } from './SocialMedia';

export const ShellFooter: FunctionComponent = () => {
    return (
        <Stack horizontal className={'shell-footer'} verticalAlign={'center'}>
            <Copyright/>
            <Spacer/>
            <SocialMedia/>
        </Stack>
    );
};
