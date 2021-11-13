import {RegistrationInfoPage} from '../support/registration-info.page';

describe('Registration Info', () => {
    it('should show registration info', () => {
        RegistrationInfoPage.navigate();

        RegistrationInfoPage.findRegistrationLink().should('be.visible');
        RegistrationInfoPage.findSections().should('have.length', 5);
    });
});
