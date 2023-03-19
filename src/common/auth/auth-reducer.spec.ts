import { AuthActions, authReducer, initialAuthState } from './auth-reducer';
import { ModelFactory } from '../../testing';

describe('authReducer', () => {
    test('when auth successful then returns authenticated state', () => {
        const credentials = ModelFactory.credentialsForUser();

        const state = authReducer(
            initialAuthState(),
            AuthActions.success(credentials)
        );

        expect(state.credentials).toEqual(credentials);
        expect(state.error).toEqual(null);
        expect(sessionStorage.getItem('auth-state')).toContain(
            JSON.stringify(state)
        );
    });

    test('when auth failed then returns error state', () => {
        const state = authReducer(
            initialAuthState(),
            AuthActions.error('bad stuff')
        );

        expect(state.credentials).toEqual(null);
        expect(state.error).toEqual('bad stuff');
        expect(sessionStorage.getItem('auth-state')).toContain(
            JSON.stringify(state)
        );
    });

    test('when auth cleared then returns cleared auth', () => {
        const state = authReducer(initialAuthState(), AuthActions.clear());

        expect(state.credentials).toEqual(null);
        expect(state.error).toEqual(null);
        expect(sessionStorage.getItem('auth-state')).toContain(
            JSON.stringify(state)
        );
    });
});
