import { FC } from 'react';
import { AlertModel } from './state/models';
import {
    Control,
    Controller,
    FormState,
    UseFormHandleSubmit
} from 'react-hook-form';
import {
    ControlledTextInput,
    TextInput
} from '../../common/components/TextInput';

export type AlertFormModel = Omit<AlertModel, 'id'>;

export type AlertFormProps = {
    state: FormState<AlertFormModel>;
    control: Control<AlertFormModel>;
    onSubmit: ReturnType<UseFormHandleSubmit<AlertFormModel>>;
};
export const AlertForm: FC<AlertFormProps> = ({ control, state, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} aria-label={'alert form'}>
            <ControlledTextInput
                label={'Text'}
                name={'text'}
                aria-label={'text'}
                control={control}
                state={state}
            />

            <ControlledTextInput
                label={'Severity'}
                aria-label={'severity'}
                name={'severity'}
                disabled={true}
                control={control}
                state={state}
            />
        </form>
    );
};
