import { Stack } from '@fluentui/react';
import React, {FC, PropsWithChildren} from 'react';
import {Loading} from '../../common';
import styles from './ShellMainContent.module.css';

export const ShellMainContent: FC<PropsWithChildren> = ({children}) => {
    return (
        <Stack grow={true} className={`${styles.mainContent} flex`}>
            <React.Suspense fallback={<Loading/>}>
                {children}
            </React.Suspense>
        </Stack>
    );
};
