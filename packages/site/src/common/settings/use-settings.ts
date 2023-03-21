import { useQuery } from 'react-query';
import { SettingsModel } from './settings-model';

export function useSettings() {
    const { data, ...rest } = useQuery<SettingsModel>('settings', async () => {
        const response = await fetch('/settings.json');
        return await response.json();
    });

    return {
        ...rest,
        settings: data
    };
}
