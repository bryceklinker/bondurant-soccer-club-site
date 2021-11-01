import React, {FunctionComponent} from 'react';
import {Media} from '../common';
import {Container, Menu, Segment, Visibility} from 'semantic-ui-react';
import {NavMenuItems} from './NavMenuItems';

export interface DesktopNavbarProps {

}

export const DesktopNavbar: FunctionComponent<DesktopNavbarProps> = ({children}) => {
    return (
        <Media greaterThan={'mobile'}>
            <Visibility once={false}>
                <Segment inverted textAlign={'center'} vertical>
                    <Menu inverted>
                        <NavMenuItems/>
                    </Menu>
                </Segment>
            </Visibility>
            {children}
        </Media>
    );
};
