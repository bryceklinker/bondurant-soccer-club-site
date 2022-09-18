import {ContactUsPage} from '../support/contact-us.page';

describe('Contact Us', () => {
    it('should show each group of board members', () => {
        ContactUsPage.navigate();

        ContactUsPage.findSections().should('have.length', 3);
    })
})
