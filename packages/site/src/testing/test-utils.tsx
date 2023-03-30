import {
    render as testingLibraryRender,
    screen,
    waitFor,
    waitForElementToBeRemoved
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthUser } from '../common/auth/auth-types';
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

export async function waitForElementToBeEnabled(element: Element) {
    await waitFor(() => expect(element).toBeEnabled());
}

export { render, userEvent, waitFor, screen, waitForElementToBeRemoved };
