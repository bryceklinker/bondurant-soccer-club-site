import { AlertModel } from '../state/models';
import { useMutation, useQuery } from 'react-query';
import { useApi } from '../../../common/api/use-api';

export function useAlerts() {
    return useQuery<AlertModel[]>('alerts', async () => {
        const response = await fetch('/db/alerts.json');
        return await response.json();
    });
}

export function useUpdateAlert() {
    const api = useApi();
    return useMutation('update-alert', async (alert: AlertModel) => {
        if (!api) {
            return;
        }
        return api.put(`/alerts/${alert.id}`, alert);
    });
}

export function useCreateAlert() {
    const api = useApi();
    return useMutation(
        'create-alert',
        async (alert: Omit<AlertModel, 'id'>) => {
            if (!api) {
                return;
            }

            return api.post('/alerts', alert);
        }
    );
}
