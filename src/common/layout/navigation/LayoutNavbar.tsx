import { FC } from 'react';
import { RowFlex } from '../RowFlex';
import { MainNavigationLinks } from './MainNavigationLinks';
import { MoreNavigationLinks } from './MoreNavigationLinks';
import { LayoutNavPanel } from './LayoutNavPanel';
import { useBooleanToggle } from '../../hooks/use-boolean-toggle';

import './LayoutNavbar.css';
import {
    useIsLargeScreen,
    useIsSmallScreen
} from '../../hooks/use-screen-size';

export type LayoutNavbarProps = {};
export const LayoutNavbar: FC<LayoutNavbarProps> = () => {
    const { value, toggleOn, toggleOff } = useBooleanToggle();
    const isSmallScreen = useIsSmallScreen();
    const isLargeScreen = useIsLargeScreen();
    return (
        <>
            <RowFlex flex={0} as={'nav'} className={'navbar'}>
                {isSmallScreen && (
                    <LayoutNavPanel
                        isOpen={value}
                        onOpen={toggleOn}
                        onClose={toggleOff}
                    />
                )}
                {isLargeScreen && <MainNavigationLinks onClick={toggleOff} />}
                {isLargeScreen && <MoreNavigationLinks onClick={toggleOff} />}
            </RowFlex>
        </>
    );
};
