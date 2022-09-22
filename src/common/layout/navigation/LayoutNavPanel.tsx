import { FC } from 'react';
import { Drawer } from '@chakra-ui/react';
import { ColumnFlex } from '../ColumnFlex';
import { MainNavigationLinks } from './MainNavigationLinks';
import { MoreNavigationLinks } from './MoreNavigationLinks';

export type LayoutNavPanelProps = {
    isOpen: boolean;
    onClose: () => void;
};
export const LayoutNavPanel: FC<LayoutNavPanelProps> = ({
    isOpen,
    onClose
}) => {
    return (
        <Drawer isOpen={isOpen} onClose={onClose}>
            <ColumnFlex>
                <MainNavigationLinks onClick={onClose} />
                <MoreNavigationLinks onClick={onClose} />
            </ColumnFlex>
        </Drawer>
    );
};
