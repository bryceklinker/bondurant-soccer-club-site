import {FunctionComponent} from 'react';
import {Spacer} from '../common';
import {SocialMedia} from './SocialMedia';
import {Copyright} from './Copyright';
import {NavLinks} from './NavLinks';
import {MoreNavbar} from './MoreNavbar';
import {Drawer, DrawerProps, VStack} from '@chakra-ui/react';

export interface NavPanelProps extends Omit<DrawerProps, 'children'> {

}

export const NavPanel: FunctionComponent<NavPanelProps> = ({onClose, ...rest}) => {
    return (
        <Drawer onClose={onClose}
               {...rest}>
            <VStack className={'navpanel flex'} >
                <NavLinks onClick={onClose}/>
                <MoreNavbar onClick={onClose}/>
                <Spacer/>
                <SocialMedia/>
                <Copyright/>
            </VStack>
        </Drawer>
    );
};
