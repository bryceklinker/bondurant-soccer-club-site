import { FC } from 'react';
import { NavLink } from './NavLink';
import { MORE_INFO_NAVIGATION_LINKS } from '../../routing/route-names';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

export type MoreNavigationLinksProps = {
    onClick: () => void;
};

export const MoreNavigationLinks: FC<MoreNavigationLinksProps> = ({
    onClick
}) => {
    const moreNavLinks = MORE_INFO_NAVIGATION_LINKS.map((data, index) => (
        <MenuItem key={index} className={'menu-item'}>
            <NavLink data={data} onClick={onClick} />
        </MenuItem>
    ));
    return (
        <Menu>
            <MenuButton as={Button} className={'menu-button'}>
                More Info
            </MenuButton>
            <MenuList className={'menu-list'}>{moreNavLinks}</MenuList>
        </Menu>
    );
};
