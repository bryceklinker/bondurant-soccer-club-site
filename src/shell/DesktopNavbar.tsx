import React, {FunctionComponent} from 'react';
import {Media} from '../common';
import {Menu, Segment, Visibility} from 'semantic-ui-react';
import {NavMenuItems} from './NavMenuItems';

export interface DesktopNavbarProps {

}

import './DesktopNavbar.css';
export const DesktopNavbar: FunctionComponent<DesktopNavbarProps> = ({children}) => {
    return (
        <Media greaterThan={'mobile'} className={'media-wrapper'}>
            <Visibility once={false} >
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
