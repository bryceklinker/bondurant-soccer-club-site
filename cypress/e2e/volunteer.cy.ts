import { VolunteerPage } from '../support/volunteer.page';

describe('Volunteer', () => {
    it('should show ways to get involved', () => {
        VolunteerPage.navigate();

        VolunteerPage.findSections().should('have.length', 7);
    });

    it('should redirect to volunteer', () => {
        cy.visit('/get-involved');

        cy.url().should('include', '/volunteer');
    })

    it('should redirect to volunteer', () => {
        cy.visit('/concessions');

        cy.url().should('include', '/volunteer');
    })

    it('should redirect to volunteer', () => {
        cy.visit('/referee-info');

        cy.url().should('include', '/volunteer');
    })
});
