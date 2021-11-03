import React, {FunctionComponent} from 'react';
import {Link} from '@reach/router';
import {INavLink} from '@fluentui/react';

export const NAV_MENU_ITEMS: Array<INavLink> = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'Get Involved',
        url: '/get-involved'
    },
    {
        name: 'Contact Us',
        url: '/contact-us'
    },
    {
        name: 'About',
        url: '/about'
    },
    {
        name: 'Locations',
        url: '/locations'
    }
];

export interface NavMenuItemsProps {
    onClick?: () => void;
}

export const NavMenuItems: FunctionComponent<NavMenuItemsProps> = ({onClick}) => {
    const links = NAV_MENU_ITEMS.map(n => <Link to={n.href || ''} onClick={onClick}>{n.text}</Link>);
    return (
        <>
            {links}
        </>
    );
};
