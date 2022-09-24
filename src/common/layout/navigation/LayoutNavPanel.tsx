import { FC, useRef } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    IconButton
} from '@chakra-ui/react';
import { ColumnFlex } from '../ColumnFlex';
import { HamburgerIcon } from '@chakra-ui/icons';

import './LayoutNavPanel.css';
import {
    MAIN_NAVIGATION_LINKS,
    MORE_INFO_NAVIGATION_LINKS
} from '../../routing/route-names';
import { NavLink } from './NavLink';
export type LayoutNavPanelProps = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};
export const LayoutNavPanel: FC<LayoutNavPanelProps> = ({
    isOpen,
    onClose,
    onOpen
}) => {
    const buttonRef = useRef();
    const links = MAIN_NAVIGATION_LINKS.concat(MORE_INFO_NAVIGATION_LINKS).map(
        (link, index) => <NavLink data={link} onClick={onClose} />
    );
    return (
        <>
            <IconButton
                ref={buttonRef}
                colorScheme={'black'}
                onClick={onOpen}
                aria-label={'menu'}
                icon={<HamburgerIcon />}
            />
            <Drawer
                placement={'left'}
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={buttonRef}>
                <DrawerOverlay />
                <DrawerContent className={'navpanel'}>
                    <DrawerBody>
                        <ColumnFlex>{links}</ColumnFlex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};
