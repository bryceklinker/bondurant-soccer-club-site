import React, {FunctionComponent, useCallback, useState} from 'react';
import {Container, Grid, Icon, Menu, Segment, Sidebar} from 'semantic-ui-react';
import {NavMenuItems} from './NavMenuItems';
import {Copyright, SocialMediaFooter} from './components';
import { Media } from '../common';

import './MobileNavbar.css';
export const MobileNavbar: FunctionComponent = ({children}) => {
    const [visible, setVisible] = useState(false);
    const toggleSidebar = useCallback(() => setVisible(true), [setVisible]);
    const hideSidebar = useCallback(() => setVisible(false), [setVisible]);
    return (
        <Media at={'mobile'} className={'mobile-container'}>
            <Sidebar.Pushable>
                <Sidebar as={Menu}
                         animation={'overlay'}
                         inverted
                         visible={visible}
                         vertical
                         direction={'right'}
                         onHide={hideSidebar}>
                    <Grid columns={1} container>
                        <Grid.Row>
                            <Grid.Column>
                                <NavMenuItems onClick={hideSidebar}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row stretched>
                            <Grid.Column stretched />
                        </Grid.Row>
                        <Grid.Row verticalAlign={'bottom'}>
                            <Grid.Column verticalAlign={'bottom'}>
                                <SocialMediaFooter />
                                <Copyright />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Sidebar>

                <Sidebar.Pusher dimmed={visible}>
                    <Segment inverted textAlign={'center'} vertical>
                        <Container>
                            <Menu inverted pointing secondary size={'large'}>
                                <Menu.Menu position={'right'}>
                                    <Menu.Item onClick={toggleSidebar}>
                                        <Icon name={'sidebar'}/>
                                    </Menu.Item>
                                </Menu.Menu>
                            </Menu>
                        </Container>
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Media>
    );
};
