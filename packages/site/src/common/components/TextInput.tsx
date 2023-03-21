import { FC, InputHTMLAttributes, ReactElement } from 'react';
import { ClassNames } from '../extensions/class-names';
import {
    Control,
    Controller,
    FieldValues,
    FormState,
    Path
} from 'react-hook-form';

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string | ReactElement;
    labelClassName?: string;
    containerClassName?: string;
};

export const TextInput: FC<TextInputProps> = ({
    label,
    labelClassName,
    containerClassName,
    ...inputProps
}) => {
    const containerClasses = ClassNames.join('', containerClassName);
    const labelClasses = ClassNames.join(
        'block text-sm font-medium leading-6 text-gray-900',
        labelClassName
    );
    return (
        <div className={containerClasses}>
            <label htmlFor={inputProps.name} className={labelClasses}>
                {label}
            </label>
            <input type={'text'} {...inputProps} />
        </div>
    );
};

export type ControlledTextInputProps<
    TFieldValues extends FieldValues,
    TName extends Path<TFieldValues>
> = TextInputProps & {
    name: TName;
    control: Control<TFieldValues>;
    state: FormState<TFieldValues>;
};

export function ControlledTextInput<
    TFieldValues extends FieldValues,
    TName extends Path<TFieldValues>
>({
    control,
    state,
    name,
    ...textInputProps
}: ControlledTextInputProps<TFieldValues, TName>) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextInput
                    disabled={state.isSubmitting}
                    {...textInputProps}
                    {...field}
                />
            )}
        />
    );
}
