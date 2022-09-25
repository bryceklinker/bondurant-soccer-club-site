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
            <RowFlex flex={0} as={'nav'} className={'navbar'}>
                <LayoutNavPanel
                    isOpen={value}
                    onOpen={toggleOn}
                    onClose={toggleOff}
                />
                <MainNavigationLinks onClick={toggleOff} />
                <MoreNavigationLinks onClick={toggleOff} />
            </RowFlex>
        </>
    );
};
