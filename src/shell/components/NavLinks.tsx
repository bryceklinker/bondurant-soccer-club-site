import React, {FunctionComponent} from 'react';
import {LinkData} from '../../common';
import {Link} from '@reach/router';
import {DefaultButton} from '@fluentui/react';

const NAV_LINKS: Array<LinkData> = [
    {
        text: 'Home',
        url: '/'
    },
    {
        text: 'Get Involved',
        url: '/get-involved'
    },
    {
        text: 'Contact Us',
        url: '/contact-us'
    },
    {
        text: 'About',
        url: '/about'
    },
    {
        text: 'Locations',
        url: '/locations'
    }
];

export interface NavLinkProps {
    data: LinkData;
    onClick: () => void;
}

export const NavLink: FunctionComponent<NavLinkProps> = ({data, onClick}) => {
    const className = 'nav-link';
    return (
        <Link to={data.url} onClick={onClick} className={className}>
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
