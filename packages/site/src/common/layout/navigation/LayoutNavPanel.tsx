import { FC, Fragment } from 'react';
import { ColumnFlex } from '../ColumnFlex';
import { Transition, Dialog } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/20/solid';

import { NavLink } from './NavLink';
import { Button } from '../../components/Button';

import { RowFlex } from '../RowFlex';
import { LayoutFooter } from '../footer/LayoutFooter';
import {
    useAllNavigationLinks,
} from './hooks/useVisibleLinks';

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
    const links = useAllNavigationLinks().map((link, index) => (
        <NavLink key={index} data={link} onClick={onClose} />
    ));
    return (
        <>
            <Button
                onClick={onOpen}
                aria-label={'menu'}
                className={'px-4 py-2 md:hidden'}>
                <Bars3Icon className={'h-6 w-6 text-white'} />
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
                                            'pointer-events-auto relative w-screen max-w-md bg-black'
                                        }>
                                        <ColumnFlex
                                            className={
                                                'h-full overflow-y-auto shadow-xl'
                                            }>
                                            <RowFlex className={'flex-initial'}>
                                                <RowFlex />
                                                <Button
                                                    className={
                                                        'text-gray-300 p-4 hover:text-white focus:outline-none'
                                                    }
                                                    aria-label={'close menu'}
                                                    onClick={onClose}>
                                                    <XMarkIcon
                                                        aria-hidden={true}
                                                        className={'h-6 w-6'}
                                                    />
                                                </Button>
                                            </RowFlex>

                                            <ColumnFlex>{links}</ColumnFlex>
                                            <LayoutFooter
                                                className={'sm:flex'}
                                            />
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
