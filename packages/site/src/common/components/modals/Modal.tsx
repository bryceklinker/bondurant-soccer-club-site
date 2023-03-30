import { FC, Fragment, PropsWithChildren } from 'react';
import { Dialog, Transition } from '@headlessui/react';

type CloseModalFn = () => void;
const DEFAULT_CLOSE_FN: CloseModalFn = () => {};

export type ModalProps = PropsWithChildren & {
    open: boolean;
    onClose?: CloseModalFn;
};
export const Modal: FC<ModalProps> = ({
    open,
    onClose = DEFAULT_CLOSE_FN,
    children
}) => {
    return (
        <Transition show={open} as={Fragment}>
            <Dialog className={'relative z-50'} open={open} onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <div
                        className={'fixed inset-0 bg-black/30'}
                        aria-hidden={true}
                    />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'>
                    <div className={'fixed inset-0 overflow-y-auto'}>
                        <div
                            className={
                                'flex min-h-full items-center justify-center p-4'
                            }>
                            <Dialog.Panel
                                className={
                                    'mx-auto max-w-sm rounded shadow-2xl bg-white'
                                }>
                                {children}
                            </Dialog.Panel>
                        </div>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
};
