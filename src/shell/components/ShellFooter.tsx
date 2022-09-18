import React, {FunctionComponent} from 'react';
import {Spacer} from '../../common';
import {Stack} from '@fluentui/react';
import { Copyright } from './Copyright';
import { SocialMedia } from './SocialMedia';
import styles from './ShellFooter.module.css';

export const ShellFooter: FunctionComponent = () => {
    return (
        <Stack horizontal className={styles.shellFooter} verticalAlign={'center'}>
            <Copyright/>
            <Spacer/>
            <SocialMedia/>
        </Stack>
    );
};
