import { FC } from 'react';
import { MainNavigationLinks } from './MainNavigationLinks';
import { MoreNavigationLinks } from './MoreNavigationLinks';
import { LayoutNavPanel } from './LayoutNavPanel';
import { useBooleanToggle } from '../../hooks/use-boolean-toggle';
import { RowFlex } from '../RowFlex';
import { AuthLoginButton } from '../../auth/AuthLoginButton';

export type LayoutNavbarProps = {};
export const LayoutNavbar: FC<LayoutNavbarProps> = () => {
    const { value, toggleOn, toggleOff } = useBooleanToggle();
    return (
        <>
            <nav
                className={
                    'flex flex-row w-full bg-black pt-2 text-white navbar'
                }>
                <LayoutNavPanel
                    isOpen={value}
                    onOpen={toggleOn}
                    onClose={toggleOff}
                />
                <RowFlex className={'sm:hidden md:block'}>
                    <MainNavigationLinks onClick={toggleOff} />
                    <MoreNavigationLinks onClick={toggleOff} />
                </RowFlex>
                <AuthLoginButton />
            </nav>
        </>
    );
};
