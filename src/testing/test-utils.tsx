import {
    render as testingLibraryRender,
    screen,
    waitFor,
    waitForElementToBeRemoved
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '../common/auth/AuthProvider';
import { AuthUser } from '../common/auth/auth-types';
import { ModelFactory } from './model-factory';
import { TestingAuthProvider } from './TestingAuthProvider';

export type RenderOptions = Partial<{
    client: QueryClient;
    user?: AuthUser;
}>;

function render(ui: ReactElement, options?: RenderOptions) {
    const queryClient = options?.client ?? new QueryClient();
    return testingLibraryRender(
        <QueryClientProvider client={queryClient}>
            <TestingAuthProvider user={options?.user}>{ui}</TestingAuthProvider>
        </QueryClientProvider>
    );
}

export { render, userEvent, waitFor, screen, waitForElementToBeRemoved };
