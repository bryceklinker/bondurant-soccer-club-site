import {FunctionComponent, useMemo} from 'react';
import {LinkData, MAIN_NAVIGATION_LINKS} from '../common';
import Link from 'next/link';
import {Button} from '@chakra-ui/react';
import {useRouter} from 'next/router';

export interface NavLinkProps {
    data: LinkData;
    onClick: () => void;
}

export const NavLink: FunctionComponent<NavLinkProps> = ({data, onClick}) => {
    const router = useRouter();
    const isActive = useMemo(() => router.pathname === `/${data.url}`, [data, router]);
    const className = useMemo(() => [
        'nav-button',
        isActive ? 'active' : ''
    ].join(' '), [isActive]);
    return (
        <Link href={data.url} className={'nav-link'} aria-label={data.text}>
            <Button className={className} variant={'link'} colorScheme={'black'} onClick={onClick}>
                {data.text}
            </Button>
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
