import { ModelFactory, render, screen, waitFor } from '../../../testing';
import { LayoutNavPanel } from './LayoutNavPanel';

describe('LayoutNavPanel', () => {
    test('when user is missing then hides alerts link', async () => {
        render(
            <LayoutNavPanel
                onClose={jest.fn()}
                onOpen={jest.fn()}
                isOpen={true}
            />
        );

        await waitFor(() =>
            expect(screen.getAllByRole('link')).toHaveLength(18)
        );
        expect(
            screen.queryByRole('link', { name: 'Alerts' })
        ).not.toBeInTheDocument();
    });

    test('when user is logged in then shows alerts link', async () => {
        render(
            <LayoutNavPanel
                onClose={jest.fn()}
                onOpen={jest.fn()}
                isOpen={true}
            />,
            { user: ModelFactory.user() }
        );

        await waitFor(() =>
            expect(screen.getAllByRole('link')).toHaveLength(19)
        );
        expect(
            screen.getByRole('link', { name: 'Alerts' })
        ).toBeInTheDocument();
    });
});
