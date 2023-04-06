import {LoginCommands} from '../support/login.commands';
import {AlertsPage} from '../support/alerts.page';
import {AlertsPanel} from '../support/alerts.panel';

describe.skip('Alerts', () => {
    it.skip('should show alerts when alerts exist', () => {
        LoginCommands.login();

        AlertsPage.navigate();
        AlertsPage.createAlertButton().click();
        AlertsPage.alertTextInput().type('this is my alert');
        AlertsPage.saveAlertButton().click();

        AlertsPanel.alerts().should('have.length.at.least', 1);
    });
});
