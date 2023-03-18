import {
    FakeServer,
    ModelFactory,
    render,
    screen,
    waitFor
} from '../../testing';
import React from 'react';
import { AlertsPage } from './AlertsPage';

describe('AlertsPage', () => {
    test('when rendered then shows all alerts', async () => {
        const alerts = ModelFactory.many(ModelFactory.alert, 6);
        FakeServer.setupRestGet('/db/alerts.json', alerts);

        render(<AlertsPage />);

        await waitFor(() =>
            expect(screen.getAllByRole('row', { name: 'alert' })).toHaveLength(
                6
            )
        );
    });

    test('when rendered then shows loading while alerts load', async () => {
        const alerts = ModelFactory.many(ModelFactory.alert, 6);
        FakeServer.setupRestGet('/db/alerts.json', alerts, { delay: 400 });

        render(<AlertsPage />);

        await waitFor(() =>
            expect(screen.getByRole('progressbar')).toBeInTheDocument()
        );
    });
});
