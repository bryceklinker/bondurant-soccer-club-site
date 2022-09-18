import { Stack } from '@fluentui/react';
impor, {FC, PropsWithChildren} from 'react';
import {Loading} from '../common';

export const ShellMainContent: FC<PropsWithChildren> = ({children}) => {
    return (
        <Stack grow={true} className={`main-content flex`}>
            <React.Suspense fallback={<Loading/>}>
                {children}
            </React.Suspense>
        </Stack>
    );
};
