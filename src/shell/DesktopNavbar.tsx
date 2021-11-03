import React, {FunctionComponent} from 'react';
import {Link} from '@reach/router';
import {DefaultButton} from '@fluentui/react';
import {Media, Section} from '../common';
import {NAV_MENU_ITEMS} from './NavMenuItems';

import './DesktopNavbar.css';
export interface DesktopNavbarProps {

}


export const DesktopNavbar: FunctionComponent<DesktopNavbarProps> = ({children}) => {
    const links = NAV_MENU_ITEMS.map(l => <Link to={l.url}><DefaultButton className={'nav-button'}>{l.name}</DefaultButton></Link>);
    return (
        <Media greaterThan={'mobile'} className={'media-wrapper'}>
            <Section as={'nav'} horizontal className={'navbar'}>
                {links}
            </Section>
            {children}
        </Media>
    );
};
