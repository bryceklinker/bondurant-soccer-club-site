import { FC, useMemo } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { RowFlex } from '../RowFlex';
import { MainNavigationLinks } from './MainNavigationLinks';
import { MoreNavigationLinks } from './MoreNavigationLinks';
import { LayoutNavPanel } from './LayoutNavPanel';
import { useBooleanToggle } from '../../hooks/use-boolean-toggle';

import './LayoutNavbar.css';

export type LayoutNavbarProps = {};
export const LayoutNavbar: FC<LayoutNavbarProps> = () => {
    const { value, toggleOn, toggleOff } = useBooleanToggle();
    const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
    const isLargeScreen = useMemo(() => !isSmallScreen, [isSmallScreen]);
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
