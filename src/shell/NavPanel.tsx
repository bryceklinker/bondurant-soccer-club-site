import React, {FunctionComponent, useCallback} from 'react';
import {IPanelProps, Panel, Stack} from '@fluentui/react';
import {Spacer} from '../common';
import {SocialMedia} from './SocialMedia';
import {Copyright} from './Copyright';
import {NavLinks} from './NavLinks';
import {MoreNavbar} from './MoreNavbar';

export interface NavPanelProps extends IPanelProps {

}

export const NavPanel: FunctionComponent<NavPanelProps> = ({onDismiss, ...rest}) => {
    const handleDismiss = useCallback(() => {
        if (onDismiss) {
            onDismiss();
        }
    }, [onDismiss]);
    return (
        <Panel onDismiss={handleDismiss}
               styles={{
                   commands: 'navpanel',
                   main: 'navpanel',
                   scrollableContent: 'flex',
                   content: 'flex'
               }}
               {...rest}>
            <Stack className={'navpanel flex'} horizontalAlign={'center'}>
                <NavLinks onClick={handleDismiss}/>
                <MoreNavbar onClick={handleDismiss}/>
                <Spacer/>
                <SocialMedia/>
                <Copyright/>
            </Stack>
        </Panel>
    );
};
