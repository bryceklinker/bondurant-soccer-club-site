import { FC, PropsWithChildren, ReactElement } from 'react';
import { ClassNames } from '../../extensions/class-names';

export type InputContainerProps = PropsWithChildren & {
    name?: string;
    label: string | ReactElement;
    labelClassName?: string;
    containerClassName?: string;
    errors?: string[];
};

export const InputContainer: FC<InputContainerProps> = ({
    name,
    label,
    labelClassName,
    containerClassName,
    errors = [],
    children
}) => {
    const containerClasses = ClassNames.join('', containerClassName);
    const errorClass = errors.length > 0 ? 'text-red-500' : '';
    const labelClasses = ClassNames.join(
        'block text-sm font-medium leading-6 text-gray-900',
        errorClass,
        labelClassName
    );
    const errorItems = errors.map(e => (
        <p role={'alert'} className={errorClass} key={e}>
            {e}
        </p>
    ));
    return (
        <div className={containerClasses}>
            <label htmlFor={name} className={labelClasses}>
                {label}
            </label>
            {children}
            {errorItems}
        </div>
    );
};
