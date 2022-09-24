import { FC } from 'react';
import { RowFlex } from '../RowFlex';
import { MainNavigationLinks } from './MainNavigationLinks';
import { MoreNavigationLinks } from './MoreNavigationLinks';
import { LayoutNavPanel } from './LayoutNavPanel';
import { useBooleanToggle } from '../../hooks/use-boolean-toggle';

import './LayoutNavbar.css';
export type LayoutNavbarProps = {};
export const LayoutNavbar: FC<LayoutNavbarProps> = () => {
    const { value, toggleOn, toggleOff } = useBooleanToggle();
    return (
        <>
            <LayoutNavPanel isOpen={value} onClose={toggleOff} />
            <RowFlex flex={0} as={'nav'} className={'navbar'}>
                <MainNavigationLinks onClick={toggleOff} />
                <MoreNavigationLinks onClick={toggleOff} />
            </RowFlex>
        </>
    );
};
