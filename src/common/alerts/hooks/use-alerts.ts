import { useMemo } from 'react';
import { AlertModel, AlertSeverity } from '../state/models';

export type AsyncResult<T> = {
    isLoading: boolean;
    result: T;
};

export function useAlerts(): AsyncResult<AlertModel[]> {
    return useMemo(
        () => ({
            isLoading: false,
            result: [
                {
                    text: 'Fields are closed until March 27th',
                    id: crypto.randomUUID(),
                    status: AlertSeverity.High
                }
            ]
        }),
        []
    );
}
