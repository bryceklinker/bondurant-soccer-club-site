import React, {FunctionComponent, useCallback, useState} from 'react';
import {NavMenuItems} from './NavMenuItems';
import {Copyright, SocialMediaFooter} from './components';
import {Media} from '../common';
import {CommandBar, ICommandBarItemProps, Panel} from '@fluentui/react';

import './MobileNavbar.css';

export const MobileNavbar: FunctionComponent = ({children}) => {
    const [visible, setVisible] = useState(false);
    const toggleSidebar = useCallback(() => setVisible(true), [setVisible]);
    const hideSidebar = useCallback(() => setVisible(false), [setVisible]);

    const openPanelCommand: ICommandBarItemProps = {
        key: 'open panel',
        iconProps: {iconName: ''},
        onClick: toggleSidebar
    };
    return (
        <Media at={'mobile'} className={'mobile-container'}>
            <Panel isOpen={visible} onDismiss={hideSidebar} hasCloseButton={false}>
                <div>
                    <NavMenuItems onClick={hideSidebar}/>
                    <SocialMediaFooter/>
                    <Copyright/>
                </div>
            </Panel>

            <CommandBar items={[openPanelCommand]}/>

            {children}
        </Media>
    );
};
