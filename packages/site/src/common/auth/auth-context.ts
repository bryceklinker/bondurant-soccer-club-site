import { createContext, useContext } from 'react';
import { AuthContextState } from './auth-types';
import { AUTH_INITIAL_STATE } from './auth-reducer';
import { AuthProvider } from './AuthProvider';

export const AuthContext = createContext<AuthContextState>({
    state: AUTH_INITIAL_STATE,
    handleAuthCredentials: () => {},
    handleAuthError: () => {},
    clearAuth: () => {}
});

export function useAuthContext() {
    const context = useContext(AuthContext);
    if (context) {
        return context;
    }
    throw new Error(
        `${useAuthContext.name} must be used in a child of ${AuthProvider.name}`
    );
}
