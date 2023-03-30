import { FC, useMemo } from 'react';
import { AlertModel, AlertSeverity } from './state/models';
import { Control, FormState, UseFormHandleSubmit } from 'react-hook-form';
import { ControlledTextInput } from '../../common/components/forms/TextInput';
import { ControlledSelectInput } from '../../common/components/forms/SelectInput';

export type AlertFormModel = Omit<AlertModel, 'id'>;

export type AlertFormProps = {
    state: FormState<AlertFormModel>;
    control: Control<AlertFormModel>;
    onSubmit: ReturnType<UseFormHandleSubmit<AlertFormModel>>;
};
export const AlertForm: FC<AlertFormProps> = ({ control, state, onSubmit }) => {
    const severityOptions = useMemo(
        () =>
            Object.keys(AlertSeverity).map(s => (
                <option key={s} value={s}>
                    {s}
                </option>
            )),
        []
    );
    return (
        <form onSubmit={onSubmit} aria-label={'alert form'}>
            <ControlledTextInput
                label={'Text'}
                name={'text'}
                aria-label={'text'}
                control={control}
                state={state}
            />

            <ControlledSelectInput
                label={'Severity'}
                aria-label={'severity'}
                name={'severity'}
                disabled={true}
                control={control}
                state={state}>
                {severityOptions}
            </ControlledSelectInput>

            <ControlledTextInput
                type={'date'}
                label={'Start Date'}
                aria-label={'start date'}
                name={'startDate'}
                control={control}
                state={state}
            />

            <ControlledTextInput
                type={'date'}
                label={'Expiration Date'}
                aria-label={'expiration date'}
                name={'expirationDate'}
                control={control}
                state={state}
            />
        </form>
    );
};
