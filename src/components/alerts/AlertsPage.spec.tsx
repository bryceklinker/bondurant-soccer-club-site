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
import { AuthUser } from '../../common/auth/auth-types';
import { navigate } from 'gatsby';

jest.mock('gatsby');

describe('AlertsPage', () => {
    const loading = () => screen.getByRole('progressbar');
    const editAlertButton = () =>
        screen.getByRole('button', { name: 'edit alert' });
    const createAlertButton = () =>
        screen.getByRole('button', { name: 'create alert' });
    const alertRows = () => screen.getAllByRole('row', { name: 'alert' });
    const dialog = () => screen.getByRole('dialog');

    let user: AuthUser;

    beforeEach(() => {
        user = ModelFactory.user();
    });

    test('when rendered then shows all alerts', async () => {
        const alerts = ModelFactory.many(ModelFactory.alert, 6);
        FakeServer.setupRestGet('/db/alerts.json', alerts);

        render(<AlertsPage />, { user });

        await waitFor(() => expect(alertRows()).toHaveLength(6));
    });

    test('when rendered then shows loading while alerts load', async () => {
        const alerts = ModelFactory.many(ModelFactory.alert, 6);
        FakeServer.setupRestGet('/db/alerts.json', alerts, { delay: 400 });

        render(<AlertsPage />, { user });

        await waitFor(() => expect(loading()).toBeInTheDocument());
    });

    test('when alert edited then opens alert modal', async () => {
        const alert = ModelFactory.alert();
        FakeServer.setupRestGet('/db/alerts.json', [alert]);

        render(<AlertsPage />, { user });

        await waitForElementToBeRemoved(loading());
        await userEvent.click(editAlertButton());

        expect(dialog()).toBeVisible();
    });

    test('when alert created then opens create alert modal', async () => {
        FakeServer.setupRestGet('/db/alerts.json', []);

        render(<AlertsPage />, { user });
        await waitForElementToBeRemoved(loading());
        await userEvent.click(createAlertButton());

        expect(dialog()).toBeVisible();
    });

    test('when rendered missing user then redirects to home', async () => {
        render(<AlertsPage />);

        expect(navigate).toHaveBeenCalledWith('/');
    });
});
