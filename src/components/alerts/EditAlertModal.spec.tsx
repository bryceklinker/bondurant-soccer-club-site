import {
    FakeServer,
    ModelFactory,
    render,
    screen,
    userEvent
} from '../../testing';
import { EditAlertModal } from './EditAlertModal';
import { RestRequest } from 'msw';
import { AlertModel } from './state/models';

describe('EditAlertModal', () => {
    const severityTextBox = () =>
        screen.getByRole('textbox', { name: 'severity' });
    const textTextBox = () => screen.getByRole('textbox', { name: 'text' });
    const saveButton = () =>
        screen.getByRole('button', { name: 'save button' });
    const cancelButton = () =>
        screen.getByRole('button', { name: 'cancel button' });

    let saveRequest: RestRequest | null;
    let alert: AlertModel;

    beforeEach(() => {
        alert = ModelFactory.alert();
        saveRequest = null;
        FakeServer.setupApiPut(`/alerts/${alert.id}`, null, {
            captureRest: req => (saveRequest = req)
        });
    });

    test('when rendered then shows alert fields', () => {
        render(<EditAlertModal open={true} alert={alert} />);

        expect(textTextBox()).toHaveValue(alert.text);
        expect(severityTextBox()).toHaveValue(alert.severity);
    });

    test('when submitted then posts alert to api', async () => {
        render(<EditAlertModal open={true} alert={alert} />);

        await userEvent.type(textTextBox(), 'three');
        await userEvent.click(saveButton());

        expect(saveRequest).not.toEqual(null);
        expect(await saveRequest?.json()).toEqual({
            ...alert,
            text: alert.text + 'three'
        });
    });

    test('when submitted then closes modal', async () => {
        const onClose = jest.fn();
        render(<EditAlertModal open={true} alert={alert} onClose={onClose} />);

        await userEvent.click(saveButton());

        expect(onClose).toHaveBeenCalledWith();
    });

    test('when saving then disabled', async () => {
        FakeServer.setupApiPut(`/alerts/${alert.id}`, null, { delay: 400 });

        render(<EditAlertModal open={true} alert={alert} />);
        await userEvent.click(saveButton());

        expect(saveButton()).toBeDisabled();
        expect(textTextBox()).toBeDisabled();
        expect(severityTextBox()).toBeDisabled();
    });

    test('when closed then closes modal', async () => {
        const onClose = jest.fn();
        render(<EditAlertModal open={true} alert={alert} onClose={onClose} />);

        await userEvent.click(cancelButton());

        expect(onClose).toHaveBeenCalled();
    });
});
