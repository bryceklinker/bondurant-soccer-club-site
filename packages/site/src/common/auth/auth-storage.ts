import { AuthState } from './auth-reducer';

const KEY = 'auth-state';

function hasSessionStorage() {
    return typeof window !== 'undefined';
}
export const AuthStorage = {
    setState: (state: AuthState) => {
        if (hasSessionStorage()) {
            sessionStorage.setItem(KEY, JSON.stringify(state));
        }
    },
    getState: (): AuthState | null => {
        if (!hasSessionStorage()) {
            return null;
        }

        const json = sessionStorage.getItem(KEY);
        return json ? JSON.parse(json) : null;
    }
};
