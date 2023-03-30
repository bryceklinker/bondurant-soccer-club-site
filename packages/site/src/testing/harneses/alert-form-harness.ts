import { screen } from '../test-utils';

const textTextBox = () => screen.getByRole('textbox', { name: 'text' });
const severityBox = () => screen.getByRole('combobox', { name: 'severity' });
const startDateBox = () => screen.getByLabelText('start date');
const expirationDateBox = () => screen.getByLabelText('expiration date');

const saveButton = () => screen.getByRole('button', { name: 'save button' });
const cancelButton = () =>
    screen.getByRole('button', { name: 'cancel button' });
export const AlertFormHarness = {
    textTextBox,
    severityBox,
    startDateBox,
    expirationDateBox,
    saveButton,
    cancelButton
};
