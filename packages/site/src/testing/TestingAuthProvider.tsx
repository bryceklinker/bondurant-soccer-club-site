import { FC, PropsWithChildren } from 'react';
import { AuthUser } from '../common/auth/auth-types';
import { MetadataAuthProvider } from '../common/auth/AuthProvider';
import { ModelFactory } from './model-factory';

export type TestingAuthProviderProps = PropsWithChildren & {
    user?: AuthUser;
};
export const TestingAuthProvider: FC<TestingAuthProviderProps> = ({
    children,
    user
}) => {
    const credentials = user
        ? ModelFactory.credentialsForUser(user)
        : undefined;
    const metadata = ModelFactory.siteMetadata();
    return (
        <MetadataAuthProvider metadata={metadata} credentials={credentials}>
            {children}
        </MetadataAuthProvider>
    );
};
