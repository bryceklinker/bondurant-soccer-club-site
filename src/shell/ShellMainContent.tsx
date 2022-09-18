import { Stack } from '@fluentui/react';
import {Suspense, FC, PropsWithChildren} from 'react';
import {Loading} from '../common';

export const ShellMainContent: FC<PropsWithChildren> = ({children}) => {
    return (
        <Stack grow={true} className={`main-content flex`}>
            <Suspense fallback={<Loading/>}>
                {children}
            </Suspense>
        </Stack>
    );
};
