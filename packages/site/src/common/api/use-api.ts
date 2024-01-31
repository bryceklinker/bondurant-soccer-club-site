import { SettingsModel } from '../settings/settings-model';
import { useSettings } from '../settings/use-settings';
import { useMemo } from 'react';
import { useAccessToken } from '../auth/auth-hooks';

export type Api = {
    get: (path: string) => Promise<Response>;
    post: <T>(path: string, body: T) => Promise<Response>;
    put: <T>(path: string, body: T) => Promise<Response>;
    delete: <T>(path: string) => Promise<Response>;
};

function getHeaders(accessToken?: string | null): HeadersInit {
    if (!accessToken) {
        return {};
    }

    return {
        Authorization: `Bearer ${accessToken}`,
        cache: 'no-cache'
    };
}

function createApi(
    settings?: SettingsModel,
    accessToken?: string | null
): Api | null {
    if (!settings) {
        return null;
    }

    return {
        get: async (path: string) => {
            return await fetch(`${settings.apiUrl}${path}`, {
                headers: getHeaders(accessToken)
            });
        },
        delete: async (path: string) => {
            return await fetch(`${settings.apiUrl}${path}`, {
                method: 'DELETE',
                headers: getHeaders(accessToken)
            });
        },
        post: async <T = unknown>(path: string, body: T) => {
            return await fetch(`${settings.apiUrl}${path}`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: getHeaders(accessToken)
            });
        },
        put: async <T = unknown>(path: string, body: T) => {
            return await fetch(`${settings.apiUrl}${path}`, {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: getHeaders(accessToken)
            });
        }
    };
}

export function useApi(): ReturnType<typeof createApi> {
    const { settings } = useSettings();
    const accessToken = useAccessToken();
    return useMemo(
        () => createApi(settings, accessToken),
        [settings, accessToken]
    );
}
