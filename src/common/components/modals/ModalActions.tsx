import { FC, HTMLAttributes } from 'react';
import { ClassNames } from '../../extensions/class-names';

export type ModalActionsProps = HTMLAttributes<HTMLDivElement>;
export const ModalActions: FC<ModalActionsProps> = ({
    children,
    className,
    ...rest
}) => {
    const classes = ClassNames.join(
        'bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6',
        className
    );
    return <div className={classes}>{children}</div>;
};
