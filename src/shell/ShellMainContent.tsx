import React, {FunctionComponent} from 'react';
import {Loading} from '../common';

export const ShellMainContent: FunctionComponent = ({children}) => {
    return (
        <main>
            <React.Suspense fallback={<Loading/>}>
                {children}
            </React.Suspense>
        </main>
    );
};
