import { FC, forwardRef, InputHTMLAttributes } from 'react';
import { InputContainer, InputContainerProps } from './InputContainer';
import { ClassNames } from '../../extensions/class-names';
import {
    Control,
    Controller,
    FieldValues,
    FormState,
    Path
} from 'react-hook-form';

export type SelectInputProps = InputHTMLAttributes<HTMLSelectElement> &
    InputContainerProps;

export const SelectInput: FC<SelectInputProps> = forwardRef<
    HTMLSelectElement,
    SelectInputProps
>(({ className: selectClassName, ...selectProps }: SelectInputProps, ref) => {
    const selectClasses = ClassNames.join(
        'form-select w-full disabled:opacity-75 disabled:cursor-not-allowed',
        selectClassName
    );

    return (
        <InputContainer {...selectProps}>
            <select className={selectClasses} {...selectProps} ref={ref} />
        </InputContainer>
    );
});

export type ControlledSelectInputProps<
    TFieldValues extends FieldValues,
    TName extends Path<TFieldValues>
> = SelectInputProps & {
    name: TName;
    control: Control<TFieldValues>;
    state: FormState<TFieldValues>;
};

export function ControlledSelectInput<
    TFieldValues extends FieldValues,
    TName extends Path<TFieldValues>
>({
    control,
    state,
    name,
    ...selectInputProps
}: ControlledSelectInputProps<TFieldValues, TName>) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <SelectInput
                    errors={
                        fieldState.error?.message
                            ? [fieldState.error.message]
                            : []
                    }
                    {...field}
                    {...selectInputProps}
                />
            )}
        />
    );
}
