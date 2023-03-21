import {
    FakeServer,
    ModelFactory,
    render,
    screen,
    waitFor
} from '../../testing';
import { AlertsPanel } from './AlertsPanel';

describe('AlertsPanel', () => {
    test('when rendered then shows fields closed', async () => {
        const alert = ModelFactory.alert({
            text: 'Fields are closed until March 27th'
        });
        FakeServer.setupRestGet('/db/alerts.json', [alert]);

        render(<AlertsPanel />);

        await waitFor(() =>
            expect(screen.getByRole('alert')).toHaveTextContent('Fields')
        );
    });
});
