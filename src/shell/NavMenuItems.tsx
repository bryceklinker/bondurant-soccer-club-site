import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '@reach/router';

export const NavMenuItems = () => {
    return (
        <>
            <Menu.Item as={Link} to={'/'}>Home</Menu.Item>
            <Menu.Item as={Link} to={'get-involved'}>Get Involved</Menu.Item>
            <Menu.Item as={Link} to={'contact-us'}>Contact Us</Menu.Item>
            <Menu.Item as={Link} to={'about'}>About</Menu.Item>
            <Menu.Item as={Link} to={'locations'}>Locations</Menu.Item>
        </>
    )
}
