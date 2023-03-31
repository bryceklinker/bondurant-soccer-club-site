import {
    FakeServer,
    ModelFactory,
    render,
    screen,
    userEvent,
    waitFor
} from '../../testing';
import { AlertsPage } from './AlertsPage';
import { AuthUser } from '../../common/auth/auth-types';
import { RestRequest } from 'msw';

const loading = () => screen.queryByRole('progressbar');
const editAlertButton = () =>
    screen.getByRole('button', { name: 'edit alert' });
const createAlertButton = () =>
    screen.getByRole('button', { name: 'create alert' });
const deleteAlertButton = () =>
    screen.getByRole('button', { name: 'delete alert' });
const alertRows = () => screen.getAllByRole('row', { name: 'alert' });
const expiredAlertsToggle = () =>
    screen.getByRole('switch', { name: 'toggle expired alerts' });
const dialog = () => screen.getByRole('dialog');

describe('AlertsPage', () => {
    let user: AuthUser;

    beforeEach(() => {
        user = ModelFactory.user();
    });

    test('when rendered then shows active alerts', async () => {
        let request: RestRequest | null = null;
        const alerts = ModelFactory.many(ModelFactory.alert, 6);
        FakeServer.setupApiGet('/alerts', alerts, {
            captureRest: req => (request = req)
        });

        render(<AlertsPage />, { user });

        await waitFor(() => expect(alertRows()).toHaveLength(6));
        await waitFor(() =>
            expect(request?.url.searchParams.has('includeExpired')).toEqual(
                false
            )
        );
    });

    test('when rendered then shows alert information', async () => {
        const alert = ModelFactory.alert({
            startDate: '2022-09-01',
            expirationDate: '2022-09-04'
        });
        FakeServer.setupApiGet('/alerts', [alert]);

        render(<AlertsPage />, { user });

        await waitFor(() => expect(alertRows()).toHaveLength(1));
        const alertRow = alertRows()[0];
        expect(alertRow).toHaveTextContent(alert.text);
        expect(alertRow).toHaveTextContent(alert.severity);
        expect(alertRow).toHaveTextContent('09/01/2022');
        expect(alertRow).toHaveTextContent('09/01/2022');
    });

    test('when all alerts are shown then shows all alerts', async () => {
        let request: RestRequest | null = null;
        const alerts = ModelFactory.many(ModelFactory.alert, 6);
        FakeServer.setupApiGet('/alerts', alerts, {
            captureRest: req => (request = req)
        });

        render(<AlertsPage />, { user });
        await userEvent.click(expiredAlertsToggle());

        await waitFor(() =>
            expect(request?.url.searchParams.get('includeExpired')).toEqual(
                'true'
            )
        );
    });

    test('when rendered then shows loading while alerts load', async () => {
        const alerts = ModelFactory.many(ModelFactory.alert, 6);
        FakeServer.setupApiGet('/alerts', alerts, { delay: 400 });

        render(<AlertsPage />, { user });

        await waitFor(() => expect(loading()).toBeInTheDocument());
    });

    test('when alert edited then opens alert modal', async () => {
        const alert = ModelFactory.alert();
        FakeServer.setupApiGet('/alerts', [alert], { delay: 100 });

        render(<AlertsPage />, { user });

        await userEvent.click(editAlertButton());

        expect(dialog()).toBeVisible();
    });

    test('when alert created then opens create alert modal', async () => {
        FakeServer.setupApiGet('/alerts', []);

        render(<AlertsPage />, { user });
        await userEvent.click(createAlertButton());

        expect(dialog()).toBeVisible();
    });

    test('when alert is deleted then opens delete alert modal', async () => {
        const alert = ModelFactory.alert();
        FakeServer.setupApiGet('/alerts', [alert]);

        render(<AlertsPage />, { user });
        await userEvent.click(deleteAlertButton());

        expect(dialog()).toBeVisible();
    });

    test('when missing user then shows unauthorized', async () => {
        render(<AlertsPage />);

        expect(
            screen.getByRole('alert', { name: 'unauthorized' })
        ).toBeInTheDocument();
    });
});
