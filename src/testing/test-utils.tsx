import {
    render as testingLibraryRender,
    screen,
    waitFor
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export type RenderOptions = Partial<{
    client: QueryClient;
}>;

function render(ui: ReactElement, options?: RenderOptions) {
    const queryClient = options?.client ?? new QueryClient();
    return testingLibraryRender(
        <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    );
}

export { render, userEvent, waitFor, screen };
