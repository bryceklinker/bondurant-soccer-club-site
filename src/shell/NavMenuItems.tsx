import React, {FunctionComponent} from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '@reach/router';

export interface NavMenuItemProps {
    to: string;
    onClick?: () => void;
}
export const NavMenuItem: FunctionComponent<NavMenuItemProps> = ({to, onClick, children}) => {
    return (
        <Menu.Item as={Link} to={to} onClick={onClick}>
            {children}
        </Menu.Item>
    )
}

export interface NavMenuItemsProps {
    onClick?: () => void;
}
export const NavMenuItems: FunctionComponent<NavMenuItemsProps> = ({onClick}) => {
    return (
        <>
            <NavMenuItem to={'/'} onClick={onClick}>Home</NavMenuItem>
            <NavMenuItem to={'get-involved'} onClick={onClick}>Get Involved</NavMenuItem>
            <NavMenuItem to={'contact-us'} onClick={onClick}>Contact Us</NavMenuItem>
            <NavMenuItem to={'about'} onClick={onClick}>About</NavMenuItem>
            <NavMenuItem to={'locations'} onClick={onClick}>Locations</NavMenuItem>
        </>
    )
}
