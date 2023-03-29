import {ModelFactory, render, screen, userEvent, waitFor} from '../../../testing';
import {MoreNavigationLinks} from './MoreNavigationLinks';

describe('MoreNavigationLinks', () => {
    test('when user is missing then hides alerts navigation link', async () => {
        render(<MoreNavigationLinks onClick={jest.fn()} />);

        await userEvent.click(screen.getByRole('button'));

        await waitFor(() => expect(screen.getAllByRole('menuitem')).toHaveLength(11));
    })

    test('when user is logged in then shows alerts navigation link', async () => {
        render(<MoreNavigationLinks onClick={jest.fn()} />, {user: ModelFactory.user()});

        await userEvent.click(screen.getByRole('button'));

        await waitFor(() => expect(screen.getAllByRole('menuitem')).toHaveLength(12));
    })
})
