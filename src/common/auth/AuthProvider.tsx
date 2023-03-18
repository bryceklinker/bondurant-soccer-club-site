import { FC, PropsWithChildren } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export type AuthProviderProps = PropsWithChildren;

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const metadata = useSiteMetadata();
    return (
        <GoogleOAuthProvider clientId={metadata.clientId}>
            {children}
        </GoogleOAuthProvider>
    );
};
