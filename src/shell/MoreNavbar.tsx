import {FunctionComponent} from 'react';
import Link from 'next/link';
import {MenuButton, Menu, Button, MenuList, MenuItem} from '@chakra-ui/react';
import {MORE_INFO_NAVIGATION_LINKS} from '../common';

export interface MoreInfoLinksProps {
    onClick?: () => void;
}

export const MoreNavbar: FunctionComponent<MoreInfoLinksProps> = ({onClick}) => {
    const menuItems = MORE_INFO_NAVIGATION_LINKS.map((data, index) => (
        <MenuItem key={index} className={'nav-button'} colorScheme={'black'} variant={'link'} as={Button}>
            <Link href={data.url}>{data.text}</Link>
        </MenuItem>
    ))
    return (
        <Menu onClose={onClick}>
            <MenuButton className={'nav-button'} colorScheme={'black'} as={Button} >More Info</MenuButton>
            <MenuList backgroundColor={'black'} >
                {menuItems}
            </MenuList>
        </Menu>
    )
}
