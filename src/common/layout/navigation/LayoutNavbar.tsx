import { FC } from 'react';
import { RowFlex } from '../RowFlex';
import { MainNavigationLinks } from './MainNavigationLinks';
import { useBooleanToggle } from '../../hooks';
import { MoreNavigationLinks } from './MoreNavigationLinks';
import { LayoutNavPanel } from './LayoutNavPanel';

export type LayoutNavbarProps = {};
export const LayoutNavbar: FC<LayoutNavbarProps> = () => {
    const { value, toggleOn, toggleOff } = useBooleanToggle();
    return (
        <>
            <LayoutNavPanel isOpen={value} onClose={toggleOff} />
            <RowFlex as={'nav'} className={'navbar'}>
                <MainNavigationLinks onClick={toggleOff} />
                <MoreNavigationLinks onClick={toggleOff} />
            </RowFlex>
        </>
    );
};
