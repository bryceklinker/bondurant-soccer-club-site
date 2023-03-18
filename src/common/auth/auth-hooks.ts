import { AuthUser } from './auth-types';
import { useAuthContext } from './auth-context';
import { googleLogout } from '@react-oauth/google';
import { useCallback, useMemo } from 'react';
import * as jose from 'jose';

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
    console.log('Credentials', credentials);
    return useMemo(
        () =>
            credentials?.credential
                ? (jose.decodeJwt(credentials.credential) as AuthUser)
                : null,
        [credentials]
    );
}

export function useIsLoggedIn() {
    const user = useAuthUser();
    return user !== null;
}
