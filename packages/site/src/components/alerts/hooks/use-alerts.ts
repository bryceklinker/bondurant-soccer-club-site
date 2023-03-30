import { AlertModel } from '../state/models';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useApi } from '../../../common/api/use-api';

export function useAlerts() {
    const api = useApi();
    const { data, ...rest } = useQuery<AlertModel[]>(
        ['alerts', api],
        async () => {
            if (!api) {
                return [];
            }
            const response = await api.get('/alerts');
            return await response.json();
        }
    );

    return {
        ...rest,
        alerts: Array.isArray(data) ? data : []
    };
}

export function useUpdateAlert() {
    const api = useApi();
    const client = useQueryClient();
    return useMutation(['update-alert', api], async (alert: AlertModel) => {
        if (!api) {
            return;
        }
        const response = await api.put(`/alerts/${alert.id}`, alert);
        if (response.ok) await client.invalidateQueries('alerts');
        return response;
    });
}

export function useCreateAlert() {
    const api = useApi();
    const client = useQueryClient();
    return useMutation(
        ['create-alert', api],
        async (alert: Omit<AlertModel, 'id'>) => {
            if (!api) {
                return;
            }

            const response = await api.post('/alerts', alert);
            if (response.ok) await client.invalidateQueries('alerts');
            return response;
        }
    );
}

export function useDeleteAlert() {
    const api = useApi();
    const client = useQueryClient();
    return useMutation(['delete-alert', api], async (alert: AlertModel) => {
        if (!api) {
            return;
        }

        const response = await api.delete(`/alerts/${alert.id}`);
        if (response.ok) await client.invalidateQueries('alerts');
        return response;
    });
}
