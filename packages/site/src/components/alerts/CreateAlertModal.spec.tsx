import { FakeServer, render, screen, userEvent, waitFor } from '../../testing';
import { CreateAlertModal } from './CreateAlertModal';
import { RestRequest } from 'msw';
import { AlertSeverity } from './state/models';

describe('CreateAlertModal', () => {
    const textTextBox = () => screen.getByRole('textbox', { name: 'text' });
    const severityBox = () => screen.getByRole('textbox', { name: 'severity' });
    const saveButton = () =>
        screen.getByRole('button', { name: 'save button' });
    const cancelButton = () =>
        screen.getByRole('button', { name: 'cancel button' });

    let saveRequest: RestRequest | null;

    beforeEach(() => {
        saveRequest = null;
        FakeServer.setupApiPost('/alerts', null, {
            captureRest: req => (saveRequest = req)
        });
    });

    test('when rendered then fields are blank', () => {
        render(<CreateAlertModal open={true} />);

        expect(textTextBox()).toHaveValue('');
        expect(severityBox()).toHaveValue(AlertSeverity.High);
    });

    test('when saving the form is disabled', async () => {
        FakeServer.setupApiPost('/alerts', null, { delay: 400 });
        render(<CreateAlertModal open={true} />);

        await userEvent.type(textTextBox(), 'fields are closed');
        await userEvent.click(saveButton());

        expect(textTextBox()).toBeDisabled();
        expect(severityBox()).toBeDisabled();
        expect(saveButton()).toBeDisabled();
        expect(cancelButton()).toBeDisabled();
    });

    test('when submitted then sends alert to api', async () => {
        render(<CreateAlertModal open={true} />);

        await userEvent.type(textTextBox(), 'fields are closed');
        await userEvent.click(saveButton());

        await waitFor(() => expect(saveRequest).not.toEqual(null));
        expect(await saveRequest?.json()).toEqual({
            text: 'fields are closed',
            severity: 'High'
        });
    });

    test('when alert is saved then notifies to close', async () => {
        const onClose = jest.fn();
        render(<CreateAlertModal open={true} onClose={onClose} />);

        await userEvent.type(textTextBox(), 'fields are closed');
        await userEvent.click(saveButton());

        await waitFor(() => expect(onClose).toHaveBeenCalled());
    });

    test('when cancelled then closes modal', async () => {
        const onClose = jest.fn();
        render(<CreateAlertModal open={true} onClose={onClose} />);

        await userEvent.click(cancelButton());

        expect(onClose).toHaveBeenCalled();
    });
});
