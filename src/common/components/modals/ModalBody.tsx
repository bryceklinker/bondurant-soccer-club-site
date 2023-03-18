import { FC, HTMLAttributes } from 'react';
import { ClassNames } from '../../extensions/class-names';

export type ModalBodyProps = HTMLAttributes<HTMLDivElement>;

export const ModalBody: FC<ModalBodyProps> = ({
    children,
    className,
    ...rest
}) => {
    const classes = ClassNames.join(
        'bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4',
        className
    );
    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    );
};
