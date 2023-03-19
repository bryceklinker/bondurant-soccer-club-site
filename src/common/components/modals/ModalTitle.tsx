import { FC, PropsWithChildren } from 'react';
import { Dialog } from '@headlessui/react';

export type ModalTitleProps = PropsWithChildren;

export const ModalTitle: FC<ModalTitleProps> = ({ children }) => {
    return <Dialog.Title>{children}</Dialog.Title>;
};
