import { render, screen, userEvent } from '../../testing';
import { AlertsPanel } from './AlertsPanel';

describe('AlertsPanel', () => {
    test('when rendered then shows fields closed', () => {
        render(<AlertsPanel />);

        expect(screen.getByRole('alert')).toHaveTextContent('Fields');
    });
});
