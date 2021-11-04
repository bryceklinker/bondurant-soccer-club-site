import React, {FunctionComponent} from 'react';
import {Section, Spacer, useBooleanToggle} from '../../common';
import {DefaultButton, Panel, Stack} from '@fluentui/react';
import {Copyright, SocialMediaFooter, NavLinks} from './index';

import './ShellNavbar.css';

export const ShellNavbar: FunctionComponent = ({children}) => {
    const {value, toggleOff, toggleOn} = useBooleanToggle();
    return (
        <>
            <Panel isOpen={value}
                   onDismiss={toggleOff}
                   hasCloseButton={false}
                   isLightDismiss
                   styles={{
                       commands: 'navpanel',
                       main: 'navpanel',
                       scrollableContent: 'flex',
                       content: 'flex'
                   }}>
                <Stack className={'navpanel flex'} horizontalAlign={'center'}>
                    <NavLinks onClick={toggleOff} />
                    <Spacer/>
                    <SocialMediaFooter/>
                    <Copyright/>
                </Stack>
            </Panel>
            <Stack as={'nav'} horizontal className={'navbar'}>
                <NavLinks onClick={toggleOff} />
                <DefaultButton className={'nav-button nav-menu-button'}
                               onClick={toggleOn}
                               iconProps={{iconName: 'GlobalNavButton'}}/>
            </Stack>
        </>
    );
};
