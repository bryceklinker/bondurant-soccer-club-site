import React, {FunctionComponent} from 'react';
import {LinkData, RouteNames} from '../../common';
import {Link} from '@reach/router';
import {DefaultButton} from '@fluentui/react';

export const NAV_LINKS: Array<LinkData> = [
    {
        text: 'Home',
        url: RouteNames.Home
    },
    {
        text: 'Get Involved',
        url: RouteNames.GetInvolved
    },
    {
        text: 'Contact Us',
        url: RouteNames.ContactUs
    },
    {
        text: 'About',
        url: RouteNames.About
    },
    {
        text: 'Locations',
        url: RouteNames.Locations
    },
    {
        text: 'Schedules',
        url: RouteNames.Schedules
    }
];

export interface NavLinkProps {
    data: LinkData;
    onClick: () => void;
}

export const NavLink: FunctionComponent<NavLinkProps> = ({data, onClick}) => {
    return (
        <Link to={data.url} onClick={onClick} className={'nav-link'}>
            <DefaultButton className={'nav-button'}>
                {data.text}
            </DefaultButton>
        </Link>
    );
};

export interface NavLinksProps {
    onClick: () => void;
}

export const NavLinks: FunctionComponent<NavLinksProps> = ({onClick}) => {
    const links = NAV_LINKS.map((link, index) => <NavLink key={index} data={link} onClick={onClick}/>);
    return (
        <>
            {links}
        </>
    );
};
