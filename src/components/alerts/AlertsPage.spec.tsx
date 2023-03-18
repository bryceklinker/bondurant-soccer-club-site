import {
    FakeServer,
    ModelFactory,
    render,
    screen,
    userEvent,
    waitFor,
    waitForElementToBeRemoved
} from '../../testing';
import React from 'react';
import { AlertsPage } from './AlertsPage';

describe('AlertsPage', () => {
    const loading = () => screen.getByRole('progressbar');
    const editAlertButton = () =>
        screen.getByRole('button', { name: 'edit alert' });
    const alertRows = () => screen.getAllByRole('row', { name: 'alert' });
    const dialog = () => screen.getByRole('dialog');

    test('when rendered then shows all alerts', async () => {
        const alerts = ModelFactory.many(ModelFactory.alert, 6);
        FakeServer.setupRestGet('/db/alerts.json', alerts);

        render(<AlertsPage />);

        await waitFor(() => expect(alertRows()).toHaveLength(6));
    });

    test('when rendered then shows loading while alerts load', async () => {
        const alerts = ModelFactory.many(ModelFactory.alert, 6);
        FakeServer.setupRestGet('/db/alerts.json', alerts, { delay: 400 });

        render(<AlertsPage />);

        await waitFor(() => expect(loading()).toBeInTheDocument());
    });

    test('when alert edited then opens alert modal', async () => {
        const alert = ModelFactory.alert();
        FakeServer.setupRestGet('/db/alerts.json', [alert]);

        render(<AlertsPage />);

        await waitForElementToBeRemoved(loading());
        await userEvent.click(editAlertButton());

        expect(dialog()).toBeVisible();
    });
});
