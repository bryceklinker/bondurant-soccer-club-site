import React, {FunctionComponent} from 'react';
import {LinkData, MAIN_NAVIGATION_LINKS} from '../common';
import Link from 'next/link';
import {DefaultButton} from '@fluentui/react';

export interface NavLinkProps {
    data: LinkData;
    onClick: () => void;
}

export const NavLink: FunctionComponent<NavLinkProps> = ({data, onClick}) => {
    return (
        <Link href={data.url} onClick={onClick} className={'nav-link'} aria-label={data.text}>
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
    const links = MAIN_NAVIGATION_LINKS.map((link, index) => <NavLink key={index} data={link} onClick={onClick}/>);
    return (
        <>
            {links}
        </>
    );
};
