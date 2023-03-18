import { AuthState } from './auth-reducer';
import { CredentialResponse } from '@react-oauth/google';

export type HandleCredentialsFn = (credentials: CredentialResponse) => void;
export type HandleAuthErrorFn = (error: string) => void;
export type ClearAuthFn = () => void;
export type AuthContextState = {
    state: AuthState;
    handleAuthCredentials: HandleCredentialsFn;
    handleAuthError: HandleAuthErrorFn;
    clearAuth: ClearAuthFn;
};

export type AuthUser = Record<string, unknown> & {
    name: string;
    email: string;
    hd: string;
    sub: string;
    given_name: string;
    familly_name: string;
    exp: number;
    iat: number;
    picture: string;
};
