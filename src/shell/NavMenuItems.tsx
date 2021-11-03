import React, {FunctionComponent} from 'react';
import {Link} from '@reach/router';
import {ICommandBarItemProps} from '@fluentui/react';

export const NAV_MENU_ITEMS: Array<ICommandBarItemProps> = [
    {
        key: 'home',
        text: 'Home',
        href: '/'
    },
    {
        key: 'get involved',
        text: 'Get Involved',
        href: '/get-involved'
    },
    {
        key: 'contact us',
        text: 'Contact Us',
        href: '/contact-us'
    },
    {
        key: 'about',
        text: 'About',
        href: '/about'
    },
    {
        key: 'locations',
        text: 'Locations',
        href: '/locations'
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
