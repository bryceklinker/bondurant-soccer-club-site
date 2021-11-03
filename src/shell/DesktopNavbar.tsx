import React, {FunctionComponent} from 'react';
import {Media} from '../common';
import {NAV_MENU_ITEMS} from './NavMenuItems';
import {CommandBar} from '@fluentui/react';

import './DesktopNavbar.css';
export interface DesktopNavbarProps {

}

export const DesktopNavbar: FunctionComponent<DesktopNavbarProps> = ({children}) => {
    return (
        <Media greaterThan={'mobile'} className={'media-wrapper'}>
            <CommandBar items={NAV_MENU_ITEMS}/>
            {children}
        </Media>
    );
};
