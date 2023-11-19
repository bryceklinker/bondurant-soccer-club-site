import {
    AlertFormHarness,
    FakeServer,
    ModelFactory,
    render,
    screen,
    userEvent, waitFor
} from '../../testing';
import { EditAlertModal } from './EditAlertModal';
import { RestRequest } from 'msw';
import { AlertModel } from './state/models';

describe('EditAlertModal', () => {
    let saveRequest: RestRequest | null;
    let alert: AlertModel;

    beforeEach(() => {
        alert = ModelFactory.alert({
            startDate: '2023-03-31T03:09:08.00Z',
            expirationDate: '2023-04-01T03:09:08.00Z'
        });
        saveRequest = null;
        FakeServer.setupApiPut(`/alerts/${alert.id}`, null, {
            captureRest: req => (saveRequest = req)
        });
    });

    test('when rendered then shows alert fields', () => {
        render(<EditAlertModal open={true} alert={alert} />);

        expect(AlertFormHarness.textTextBox()).toHaveValue(alert.text);
        expect(AlertFormHarness.severityBox()).toHaveValue(alert.severity);
        expect(AlertFormHarness.startDateBox()).toHaveValue('2023-03-31');
        expect(AlertFormHarness.expirationDateBox()).toHaveValue('2023-04-01');
    });

    test('when submitted then sends alert to api', async () => {
        const user = ModelFactory.user();
        render(<EditAlertModal open={true} alert={alert} />, { user });

        await userEvent.type(AlertFormHarness.textTextBox(), 'three');
        await userEvent.click(AlertFormHarness.saveButton());

        expect(saveRequest).not.toEqual(null);
        expect(saveRequest?.headers.get('Authorization')).toEqual(
            expect.stringContaining('Bearer ')
        );
        expect(await saveRequest?.json()).toEqual({
            ...alert,
            text: alert.text + 'three',
            startDate: '2023-03-31T00:00:00.000Z',
            expirationDate: '2023-04-01T00:00:00.000Z'
        });
    });

    test('when submitted then closes modal', async () => {
        const onClose = jest.fn();
        render(<EditAlertModal open={true} alert={alert} onClose={onClose} />);

        await userEvent.click(AlertFormHarness.saveButton());

        expect(onClose).toHaveBeenCalledWith();
    });

    test('when saving then disabled', async () => {
        FakeServer.setupApiPut(`/alerts/${alert.id}`, null, { delay: 400 });

        render(<EditAlertModal open={true} alert={alert} />);
        await userEvent.click(AlertFormHarness.saveButton());

        expect(AlertFormHarness.textTextBox()).toBeDisabled();
        expect(AlertFormHarness.saveButton()).toBeDisabled();
        expect(AlertFormHarness.severityBox()).toBeDisabled();
    });

    test('when closed then closes modal', async () => {
        const onClose = jest.fn();
        render(<EditAlertModal open={true} alert={alert} onClose={onClose} />);

        await userEvent.click(AlertFormHarness.cancelButton());

        expect(onClose).toHaveBeenCalled();
    });

    test('when closed then form is reset', async () => {
        render(<EditAlertModal open={true} alert={alert} />);

        await userEvent.clear(AlertFormHarness.textTextBox());
        await userEvent.click(AlertFormHarness.cancelButton());

        expect(AlertFormHarness.textTextBox()).toHaveValue(alert.text);
    });
});
