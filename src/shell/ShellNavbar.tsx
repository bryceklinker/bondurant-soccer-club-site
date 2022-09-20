import {FunctionComponent} from 'react';
import {useBooleanToggle} from '../common';
import {NavLinks} from './NavLinks';
import {MoreNavbar} from './MoreNavbar';
import {HStack, IconButton, MenuIcon} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';

import {NavPanel} from './NavPanel';

export const ShellNavbar: FunctionComponent = () => {
    const {value, toggleOff, toggleOn} = useBooleanToggle();
    return (
        <>
            <NavPanel isOpen={value} onClose={toggleOff}/>
            <HStack as={'nav'} className={'navbar'}>
                <IconButton className={'nav-button nav-menu-button'}
                            icon={<HamburgerIcon/>}
                            aria-label={'menu'}
                            onClick={toggleOn}/>
                <NavLinks onClick={toggleOff}/>
                <MoreNavbar onClick={toggleOff}/>
            </HStack>
        </>
    );
};
