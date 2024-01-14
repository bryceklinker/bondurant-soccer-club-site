import { VolunteerOpportunitiesPage } from '../support/volunteer-opportunities.page';

describe('Volunteer Opportunities', () => {
    it('should show ways to get involved', () => {
        VolunteerOpportunitiesPage.navigate();

        VolunteerOpportunitiesPage.findSections().should('have.length', 5);
    });

    it('should redirect to volunteer opportunities', () => {
        cy.visit('/get-involved');

        VolunteerOpportunitiesPage.findSections().should('have.length', 5);
    })

    it('should redirect to volunteer opportunities', () => {
        cy.visit('/concessions');

        VolunteerOpportunitiesPage.findSections().should('have.length', 5);
    })

    it('should redirect to volunteer opportunities', () => {
        cy.visit('/referee-opportunities');

        VolunteerOpportunitiesPage.findSections().should('have.length', 5);
    })
});
