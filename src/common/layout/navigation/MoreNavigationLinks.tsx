import { FC, useMemo } from 'react';
import { NavLink } from './NavLink';
import { MORE_INFO_NAVIGATION_LINKS } from '../../routing/route-names';
import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    ResponsiveValue
} from '@chakra-ui/react';
import * as CSS from 'csstype';

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
    const visibility = useMemo<ResponsiveValue<CSS.Property.Visibility>>(
        () => ({
            base: 'hidden',
            md: 'visible'
        }),
        []
    );
    return (
        <Menu>
            <MenuButton
                visibility={visibility}
                as={Button}
                aria-label={'more info'}
                className={'menu-button'}>
                More Info
            </MenuButton>
            <MenuList className={'menu-list'}>{moreNavLinks}</MenuList>
        </Menu>
    );
};
