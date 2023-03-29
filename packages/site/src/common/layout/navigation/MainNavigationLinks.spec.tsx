import { MainNavigationLinks } from './MainNavigationLinks';
import { render, screen, waitFor } from '../../../testing';

describe('MainNavigationLinks', () => {
    test('when rendered then shows main navigation links', async () => {
        render(<MainNavigationLinks onClick={jest.fn()} />);

        await waitFor(() =>
            expect(screen.getAllByRole('link')).toHaveLength(6)
        );
    });
});
