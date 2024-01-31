import { FC, forwardRef, InputHTMLAttributes } from 'react';
import { ClassNames } from '../../extensions/class-names';
import {
    Control,
    Controller,
    FieldValues,
    FormState,
    Path
} from 'react-hook-form';
import { InputContainer, InputContainerProps } from './InputContainer';

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> &
    InputContainerProps;

export const TextInput: FC<TextInputProps> = forwardRef<
    HTMLInputElement,
    TextInputProps
>(({ className: inputClassName, ...inputProps }, ref) => {
    const inputClasses = ClassNames.join(
        'form-input w-full disabled:opacity-75 disabled:cursor-not-allowed',
        inputClassName
    );
    return (
        <InputContainer {...inputProps}>
            <input
                type={'text'}
                className={inputClasses}
                {...inputProps}
                ref={ref}
            />
        </InputContainer>
    );
});

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
    type,
    ...textInputProps
}: ControlledTextInputProps<TFieldValues, TName>) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <TextInput
                    type={type}
                    errors={
                        fieldState.error?.message
                            ? [fieldState.error.message]
                            : []
                    }
                    placeholder={type === 'date' ? field.value : ''}
                    {...field}
                    {...textInputProps}
                />
            )}
        />
    );
}
