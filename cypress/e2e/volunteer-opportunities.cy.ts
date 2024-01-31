import { VolunteerPage } from '../support/volunteer.page';

describe('Volunteer', () => {
    it('should show ways to get involved', () => {
        VolunteerPage.navigate();

        VolunteerPage.findSections().should('have.length', 7);
    });

    it('should redirect to volunteer', () => {
        cy.visit('/get-involved');

        VolunteerPage.findSections().should('have.length', 7);
    })

    it('should redirect to volunteer', () => {
        cy.visit('/concessions');

        VolunteerPage.findSections().should('have.length', 7);
    })

    it('should redirect to volunteer', () => {
        cy.visit('/referee-info');

        VolunteerPage.findSections().should('have.length', 7);
    })
});
