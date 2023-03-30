import { FC, HTMLAttributes } from 'react';
import { Dialog } from '@headlessui/react';
import { ClassNames } from '../../extensions/class-names';

export type ModalTitleProps = HTMLAttributes<HTMLHeadingElement>;

export const ModalTitle: FC<ModalTitleProps> = ({
    children,
    className,
    ...props
}) => {
    const classes = ClassNames.join('p-2 text-lg font-bold', className);
    return (
        <Dialog.Title className={classes} {...props}>
            {children}
        </Dialog.Title>
    );
};
