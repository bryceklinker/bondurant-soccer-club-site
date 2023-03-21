import { FC, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { NavLink } from './NavLink';
import { MORE_INFO_NAVIGATION_LINKS } from '../../routing/route-names';
import { ColumnFlex } from '../ColumnFlex';
import { useAuthUser, useIsLoggedIn } from '../../auth/auth-hooks';

export type MoreNavigationLinksProps = {
    onClick: () => void;
};

export const MoreNavigationLinks: FC<MoreNavigationLinksProps> = ({
    onClick
}) => {
    const isLoggedIn = useIsLoggedIn();
    const moreNavLinks = MORE_INFO_NAVIGATION_LINKS.filter(
        l => !l.requiresUser || isLoggedIn
    ).map((data, index) => (
        <Menu.Item key={index} as={NavLink} data={data} onClick={onClick} />
    ));
    return (
        <Menu as={'div'} className={'relative inline-block text-left z-40'}>
            <Menu.Button
                aria-label={'more info'}
                className={'font-bold py-2 px-2 hover:brightness-75'}>
                More Info
            </Menu.Button>

            <Transition
                as={Fragment}
                enter={'transition ease-out duration-100'}
                enterFrom={'transform opacity-0 scale-95'}
                enterTo={'transform opacity-100 scale-100'}
                leave={'transition ease-in duration-75'}
                leaveFrom={'transform opacity-100 scale-100'}
                leaveTo={'transform opacity-0 scale-95'}>
                <Menu.Items
                    className={
                        'absolute right-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none menu-list'
                    }>
                    <ColumnFlex className={'px-1 py-1'}>
                        {moreNavLinks}
                    </ColumnFlex>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};
