import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import './index.css';

// Your top level component
import Shell from './shell/Shell';

// Export your top level component as JSX (for static rendering)
export default Shell;

// Render your app
if (typeof document !== 'undefined') {
    const target = document.getElementById('root');
    if (!target) {
        throw new Error('Could not find element root');
    }
    const renderMethod = target.hasChildNodes()
        ? ReactDOM.hydrate
        : ReactDOM.render;

    const render = (Comp: () => JSX.Element) => {
        renderMethod(
            <AppContainer>
                <Comp/>
            </AppContainer>,
            target
        );
    };

    render(Shell);

    // @ts-ignore
    if (module && module.hot) {
        // @ts-ignore
        module.hot.accept('./shell/Shell', () => {
            render(Shell);
        });
    }
}
