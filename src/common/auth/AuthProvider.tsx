import { FC, PropsWithChildren, useCallback, useReducer } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { useSiteMetadata } from '../hooks/useSiteMetadata';
import {
    AUTH_INITIAL_STATE,
    AuthActions,
    AuthCredentials,
    AuthError,
    authReducer
} from './auth-reducer';
import { AuthContext } from './auth-context';

export type AuthProviderProps = PropsWithChildren;

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const metadata = useSiteMetadata();
    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

    const handleAuthCredentials = useCallback(
        (creds: AuthCredentials) => dispatch(AuthActions.success(creds)),
        [dispatch]
    );
    const handleAuthError = useCallback(
        (error: AuthError) => dispatch(AuthActions.error(error)),
        [dispatch]
    );
    const clearAuth = useCallback(
        () => dispatch(AuthActions.clear()),
        [dispatch]
    );
    return (
        <AuthContext.Provider
            value={{
                state,
                handleAuthCredentials,
                handleAuthError,
                clearAuth
            }}>
            <GoogleOAuthProvider clientId={metadata.clientId}>
                {children}
            </GoogleOAuthProvider>
        </AuthContext.Provider>
    );
};
