import { AuthUser } from './auth-types';
import { useAuthContext } from './auth-context';
import { googleLogout } from '@react-oauth/google';
import { useCallback, useMemo } from 'react';
import { Jwt } from './jwt-decode';

export function useAuthLogin() {
    const { handleAuthCredentials, handleAuthError } = useAuthContext();
    const onError = useCallback(
        () => handleAuthError('failed google login'),
        [handleAuthError]
    );
    return { onSuccess: handleAuthCredentials, onError };
}

export function useAuthLogout() {
    const { clearAuth } = useAuthContext();
    return useCallback(() => {
        googleLogout();
        clearAuth();
    }, [clearAuth]);
}

export function useAuthUser(): AuthUser | null {
    const {
        state: { credentials }
    } = useAuthContext();
    return useMemo(
        () =>
            credentials?.credential
                ? (Jwt.decodePayload(credentials.credential) as AuthUser)
                : null,
        [credentials]
    );
}

export function useIsLoggedIn() {
    const user = useAuthUser();
    return user !== null;
}
