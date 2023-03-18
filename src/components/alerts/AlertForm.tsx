import { FC } from 'react';
import { AlertModel } from './state/models';
import {
    Control,
    Controller,
    FormState,
    UseFormHandleSubmit
} from 'react-hook-form';

export type AlertFormModel = Omit<AlertModel, 'id'>;

export type AlertFormProps = {
    state: FormState<AlertFormModel>;
    control: Control<AlertFormModel>;
    onSubmit: ReturnType<UseFormHandleSubmit<AlertFormModel>>;
};
export const AlertForm: FC<AlertFormProps> = ({ control, state, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} aria-label={'alert form'}>
            <Controller
                name={'text'}
                control={control}
                render={({ field }) => {
                    return (
                        <div>
                            <label htmlFor={'text'}>Text</label>
                            <input
                                disabled={state.isSubmitting}
                                aria-label={'text'}
                                {...field}
                            />
                        </div>
                    );
                }}
            />

            <Controller
                name={'severity'}
                control={control}
                render={({ field }) => {
                    return (
                        <div>
                            <label htmlFor={'severity'}>Severity</label>
                            <input
                                disabled={state.isSubmitting}
                                aria-label={'severity'}
                                {...field}
                            />
                        </div>
                    );
                }}
            />
        </form>
    );
};