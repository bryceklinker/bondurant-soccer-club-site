import { Stack } from '@fluentui/react';
import React, {FunctionComponent} from 'react';
import {Loading} from '../../common';
import './ShellMainContent.css';

export const ShellMainContent: FunctionComponent = ({children}) => {
    return (
        <Stack grow={true} className={'main-content flex'}>
            <React.Suspense fallback={<Loading/>}>
                {children}
            </React.Suspense>
        </Stack>
    );
};
