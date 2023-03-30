import {
    FakeServer,
    ModelFactory,
    render,
    screen,
    userEvent,
    waitFor
} from '../../testing';
import { RestRequest } from 'msw';
import { DeleteAlertModal } from './DeleteAlertModal';
import { AlertModel } from './state/models';

const deleteButton = () => screen.getByRole('button', { name: 'delete alert' });
const cancelButton = () =>
    screen.getByRole('button', { name: 'cancel delete' });

describe('DeleteAlertModal', () => {
    let sentRequest: RestRequest | null;
    let alert: AlertModel;

    beforeEach(() => {
        alert = ModelFactory.alert();

        sentRequest = null;
        FakeServer.setupApiDelete(`/alerts/${alert.id}`, {
            captureRest: req => (sentRequest = req)
        });
    });

    test('when alert is deleted then sends delete to api', async () => {
        render(<DeleteAlertModal open={true} alert={alert} />);

        await userEvent.click(deleteButton());

        await waitFor(() => expect(sentRequest).not.toEqual(null));
    });

    test('when alert is deleting then buttons are disabled', async () => {
        FakeServer.setupApiDelete('/alerts', { delay: 400 });

        render(<DeleteAlertModal open={true} alert={alert} />);

        await userEvent.click(deleteButton());

        await waitFor(() => expect(deleteButton()).toBeDisabled());
        expect(cancelButton()).toBeDisabled();
    });

    test('when alert is deleted then modal is closed', async () => {
        const onClose = jest.fn();
        render(
            <DeleteAlertModal open={true} alert={alert} onClose={onClose} />
        );

        await userEvent.click(deleteButton());

        await waitFor(() => expect(onClose).toHaveBeenCalled());
    });

    test('when delete is cancelled then modal is closed', async () => {
        const onClose = jest.fn();
        render(
            <DeleteAlertModal open={true} alert={alert} onClose={onClose} />
        );

        await userEvent.click(cancelButton());

        await waitFor(() => expect(onClose).toHaveBeenCalled());
    });
});
