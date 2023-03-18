import { AlertModel } from '../state/models';
import { useMutation, useQuery } from 'react-query';
import { useSettings } from '../../../common/settings/use-settings';

export function useAlerts() {
    return useQuery<AlertModel[]>('alerts', async () => {
        const response = await fetch('/db/alerts.json');
        return await response.json();
    });
}

export function usePostAlert() {
    const { settings } = useSettings();
    return useMutation('alerts', async (alert: AlertModel) => {
        if (!settings) {
            return;
        }
        return fetch(`${settings.apiUrl}/alerts`, {
            method: 'POST',
            body: JSON.stringify(alert)
        });
    });
}
