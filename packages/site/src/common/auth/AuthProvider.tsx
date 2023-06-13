import { FC, PropsWithChildren, useCallback, useMemo, useReducer } from 'react';
import { CredentialResponse, GoogleOAuthProvider } from '@react-oauth/google';

import { SiteMetadata, useSiteMetadata } from '../hooks/useSiteMetadata';
import { AuthActions, authReducer, initialAuthState } from './auth-reducer';
import { AuthContext } from './auth-context';

export type AuthProviderProps = PropsWithChildren;

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const metadata = useSiteMetadata();
    return (
        <MetadataAuthProvider metadata={metadata}>
            {children}
        </MetadataAuthProvider>
    );
};

export type MetadataAuthProviderProps = AuthProviderProps & {
    credentials?: CredentialResponse;
    metadata: SiteMetadata;
};
export const MetadataAuthProvider: FC<MetadataAuthProviderProps> = ({
    children,
    metadata,
    credentials
}) => {
    const initialState = useMemo(
        () => initialAuthState(credentials),
        [credentials]
    );
    const [state, dispatch] = useReducer(authReducer, initialState);

    const handleAuthCredentials = useCallback(
        (creds: CredentialResponse) => dispatch(AuthActions.success(creds)),
        [dispatch]
    );
    const handleAuthError = useCallback(
        (error: string) => dispatch(AuthActions.error(error)),
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
