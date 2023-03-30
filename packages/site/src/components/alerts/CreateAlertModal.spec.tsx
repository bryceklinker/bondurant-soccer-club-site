import {
    AlertFormHarness,
    FakeServer,
    ModelFactory,
    render,
    screen,
    userEvent,
    waitFor,
    waitForElementToBeEnabled
} from '../../testing';
import { CreateAlertModal } from './CreateAlertModal';
import { RestRequest } from 'msw';
import { AlertSeverity } from './state/models';

describe('CreateAlertModal', () => {
    let saveRequest: RestRequest | null;

    beforeEach(() => {
        saveRequest = null;
        FakeServer.setupApiPost('/alerts', null, {
            captureRest: req => (saveRequest = req)
        });
    });

    test('when rendered then fields are blank', () => {
        render(<CreateAlertModal open={true} />);

        expect(AlertFormHarness.textTextBox()).toHaveValue('');
        expect(AlertFormHarness.severityBox()).toHaveValue(AlertSeverity.High);
        expect(AlertFormHarness.startDateBox()).toHaveValue('');
        expect(AlertFormHarness.expirationDateBox()).toHaveValue('');
    });

    test('when saving the form is disabled', async () => {
        FakeServer.setupApiPost('/alerts', null, { delay: 400 });
        render(<CreateAlertModal open={true} />);

        await userEvent.type(AlertFormHarness.textTextBox(), 'fields are closed');
        await waitForElementToBeEnabled(AlertFormHarness.saveButton());
        await userEvent.click(AlertFormHarness.saveButton());

        expect(AlertFormHarness.textTextBox()).toBeDisabled();
        expect(AlertFormHarness.severityBox()).toBeDisabled();
        expect(AlertFormHarness.startDateBox()).toBeDisabled();
        expect(AlertFormHarness.expirationDateBox()).toBeDisabled();
        expect(AlertFormHarness.saveButton()).toBeDisabled();
        expect(AlertFormHarness.cancelButton()).toBeDisabled();
    });

    test('when submitted then sends alert to api', async () => {
        const user = ModelFactory.user();
        render(<CreateAlertModal open={true} />, { user });

        await userEvent.type(AlertFormHarness.textTextBox(), 'fields are closed');
        await userEvent.type(AlertFormHarness.startDateBox(), '2022-09-23');
        await userEvent.type(AlertFormHarness.expirationDateBox(), '2022-10-23');
        await waitForElementToBeEnabled(AlertFormHarness.saveButton());
        await userEvent.click(AlertFormHarness.saveButton());

        await waitFor(() => expect(saveRequest).not.toEqual(null));
        expect(saveRequest?.headers.get('Authorization')).toEqual(
            expect.stringContaining('Bearer ')
        );
        expect(await saveRequest?.json()).toEqual({
            text: 'fields are closed',
            severity: 'High',
            startDate: '2022-09-23T00:00:00.000Z',
            expirationDate: '2022-10-23T00:00:00.000Z'
        });
    });

    test('when alert is saved then notifies to close', async () => {
        const onClose = jest.fn();
        render(<CreateAlertModal open={true} onClose={onClose} />);

        await userEvent.type(AlertFormHarness.textTextBox(), 'fields are closed');
        await waitForElementToBeEnabled(AlertFormHarness.saveButton());
        await userEvent.click(AlertFormHarness.saveButton());

        await waitFor(() => expect(onClose).toHaveBeenCalled());
    });

    test('when cancelled then closes modal', async () => {
        const onClose = jest.fn();
        render(<CreateAlertModal open={true} onClose={onClose} />);

        await userEvent.click(AlertFormHarness.cancelButton());

        expect(onClose).toHaveBeenCalled();
    });
});
