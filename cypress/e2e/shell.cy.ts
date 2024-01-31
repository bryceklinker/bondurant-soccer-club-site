import { HomePage } from '../support/home.page';
import { ShellCommands } from '../support/shell.commands';

describe('Shell', () => {
    it('should show navigation links', () => {
        HomePage.navigate();

        ShellCommands.findHomeLink().should('be.visible');
        ShellCommands.findVolunteerLink().should('be.visible');
        ShellCommands.findContactUsLink().should('be.visible');
        ShellCommands.findAboutLink().should('be.visible');
        ShellCommands.findLocationsLink().should('be.visible');
        ShellCommands.findSchedulesLink().should('be.visible');
    });

    it('should show more info navigation links', () => {
        HomePage.navigate();

        ShellCommands.openMoreInfo();

        ShellCommands.findDocumentsLink().should('be.visible');
        ShellCommands.findFAQLink().should('be.visible');
        ShellCommands.findPictureDayLink().should('be.visible');
        ShellCommands.findProgramInfoLink().should('be.visible');
        ShellCommands.findRegistrationInfoLink().should('be.visible');
        ShellCommands.findSponsorshipInfoLink().should('be.visible');
        ShellCommands.findU5U6InfoLink().should('be.visible');
        ShellCommands.findUniformInfoLink().should('be.visible');
    });

    it('should show social media links', () => {
        HomePage.navigate();

        ShellCommands.findFacebookLink().should('be.visible');
    });

    it('should show copyright', () => {
        HomePage.navigate();

        ShellCommands.findCopyright().should('be.visible');
    });
});
