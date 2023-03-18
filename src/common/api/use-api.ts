import { SettingsModel } from '../settings/settings-model';
import { useSettings } from '../settings/use-settings';
import { useMemo } from 'react';

export type Api = {
    post: <T>(path: string, body: T) => Promise<Response>;
    put: <T>(path: string, body: T) => Promise<Response>;
};

function createApi(settings?: SettingsModel): Api | null {
    if (!settings) {
        return null;
    }

    return {
        post: async <T = unknown>(path: string, body: T) => {
            return await fetch(`${settings.apiUrl}${path}`, {
                method: 'POST',
                body: JSON.stringify(body)
            });
        },
        put: async <T = unknown>(path: string, body: T) => {
            return await fetch(`${settings.apiUrl}${path}`, {
                method: 'PUT',
                body: JSON.stringify(body)
            });
        }
    };
}

export function useApi(): ReturnType<typeof createApi> {
    const { settings } = useSettings();
    return useMemo(() => createApi(settings), [settings]);
}
