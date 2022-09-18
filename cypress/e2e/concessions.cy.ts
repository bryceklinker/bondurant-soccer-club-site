import {ConcessionsPage} from '../support/concessions.page';

describe('Concessions', () => {
    it('should show concessions info', () => {
        ConcessionsPage.navigate();

        ConcessionsPage.findSections().should('have.length', 2);
    })
})
