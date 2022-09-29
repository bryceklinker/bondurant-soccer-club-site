import { FC, Fragment } from 'react';
import { ColumnFlex } from '../ColumnFlex';
import { Transition, Dialog } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/20/solid';

import {
    MAIN_NAVIGATION_LINKS,
    MORE_INFO_NAVIGATION_LINKS
} from '../../routing/route-names';
import { NavLink } from './NavLink';
import { Button } from '../../components/Button';

import './LayoutNavPanel.css';

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
    const links = MAIN_NAVIGATION_LINKS.concat(MORE_INFO_NAVIGATION_LINKS).map(
        (link, index) => <NavLink key={index} data={link} onClick={onClose} />
    );
    return (
        <>
            <Button
                onClick={onOpen}
                className={
                    'min-h-6 min-w-6 max-h-6 min-w-6 h-6 w-6 text-white sm:visible md:hidden'
                }>
                <Bars3Icon />
            </Button>
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog
                    as={'div'}
                    className={'relative z-10'}
                    onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter={'ease-in-out duration-500'}
                        enterFrom={'opacity-0'}
                        enterTo={'opacity-100'}
                        leave={'ease-in-out duration-500'}
                        leaveFrom={'opacity-100'}
                        leaveTo={'opacity-0'}>
                        <div
                            className={
                                'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
                            }
                        />
                    </Transition.Child>

                    <div className={'fixed inset-0 overflow-hidden'}>
                        <div className={'absolute inset-0 overflow-hidden'}>
                            <div
                                className={
                                    'pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'
                                }>
                                <Transition.Child
                                    as={Fragment}
                                    enter={
                                        'transform transition ease-in-out duration-500 sm:duration-700'
                                    }
                                    enterFrom={'translate-x-full'}
                                    enterTo={'translate-x-0'}
                                    leave={
                                        'transform transition east-in-out duration-500 sm:duration-700'
                                    }
                                    leaveFrom={'translate-x-0'}
                                    leaveTo={'translate-x-full'}>
                                    <Dialog.Panel
                                        className={
                                            'pointer-events-auto relative w-screen max-w-md'
                                        }>
                                        <Transition.Child
                                            as={Fragment}
                                            enter={'ease-in-out duration-500'}
                                            enterFrom={'opacity-0'}
                                            enterTo={'opacity-100'}
                                            leave={'ease-in-out duration-500'}
                                            leaveFrom={'opacity-100'}
                                            leaveTo={'opacity-0'}>
                                            <div
                                                className={
                                                    'absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4'
                                                }>
                                                <Button
                                                    className={
                                                        'rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                                                    }
                                                    onClick={onClose}>
                                                    <XMarkIcon
                                                        aria-hidden={true}
                                                        className={'h-6 w-6'}
                                                    />
                                                </Button>
                                            </div>
                                        </Transition.Child>
                                        <ColumnFlex
                                            className={
                                                'h-full overflow-y-scroll bg-black shadow-xl'
                                            }>
                                            <div className={'px-4 sm:px-6'}>
                                                <Dialog.Title>
                                                    Bondurant Soccer Club
                                                </Dialog.Title>
                                            </div>
                                            <ColumnFlex>{links}</ColumnFlex>
                                        </ColumnFlex>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};
