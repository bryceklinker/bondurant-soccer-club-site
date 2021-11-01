import React, {FunctionComponent} from 'react';
import {Loading} from '../common';

import './ShellMainContent.css';
export const ShellMainContent: FunctionComponent = ({children}) => {
    return (
        <main>
            <React.Suspense fallback={<Loading/>}>
                {children}
            </React.Suspense>
        </main>
    );
};
