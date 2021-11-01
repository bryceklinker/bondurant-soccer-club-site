import React, {FunctionComponent, useCallback, useState} from 'react';
import {Container, Icon, Menu, Segment, Sidebar} from 'semantic-ui-react';
import {Media} from '../common';
import {NavMenuItems} from './NavMenuItems';

export interface MobileNavbarProps {

}

export const MobileNavbar: FunctionComponent<MobileNavbarProps> = ({children}) => {
    const [visible, setVisible] = useState(false);
    const toggleSidebar = useCallback(() => setVisible(true), [setVisible]);
    const hideSidebar = useCallback(() => setVisible(false), [setVisible]);
    return (
        <Media at={'mobile'}>
            <Sidebar.Pushable>
                <Sidebar as={Menu}
                         animation={'overlay'}
                         inverted
                         visible={visible}
                         vertical
                         onHide={hideSidebar}>
                    <NavMenuItems/>
                </Sidebar>

                <Sidebar.Pusher dimmed={visible}>
                    <Segment inverted textAlign={'center'} vertical>
                        <Container>
                            <Menu inverted pointing secondary size={'large'}>
                                <Menu.Item onClick={toggleSidebar}>
                                    <Icon name={'sidebar'}/>
                                </Menu.Item>
                            </Menu>
                        </Container>
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Media>
    );
};
