import { CredentialResponse } from '@react-oauth/google';

export type AuthState = {
    credentials: CredentialResponse | null;
    error: string | null;
};

export type AuthAction =
    | { type: 'success'; payload: CredentialResponse }
    | { type: 'failed'; payload: string }
    | { type: 'clear' };

export const AuthActions = {
    success: (creds: CredentialResponse): AuthAction => ({
        type: 'success',
        payload: creds
    }),
    error: (error: string): AuthAction => ({ type: 'failed', payload: error }),
    clear: (): AuthAction => ({ type: 'clear' })
};
export const AUTH_INITIAL_STATE: AuthState = {
    credentials: null,
    error: null
};
function stateReducer(state: AuthState, action: AuthAction): AuthState {
    switch (action.type) {
        case 'success':
            return {
                ...state,
                credentials: action.payload,
                error: null
            };
        case 'failed':
            return { ...state, credentials: null, error: action.payload };
        case 'clear':
            return { ...state, credentials: null, error: null };
    }
}

export function initialAuthState(credentials?: CredentialResponse): AuthState {
    const storedState = sessionStorage.getItem('auth-state');
    if (storedState) {
        return JSON.parse(storedState) as AuthState;
    }

    return { ...AUTH_INITIAL_STATE, credentials: credentials ?? null };
}

export function authReducer(state: AuthState, action: AuthAction): AuthState {
    const newState = stateReducer(state, action);
    sessionStorage.setItem('auth-state', JSON.stringify(newState));
    return newState;
}
