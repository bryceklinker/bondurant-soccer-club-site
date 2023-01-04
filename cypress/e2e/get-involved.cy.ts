import { GetInvolvedPage } from '../support/get-involved.page';

describe('Get Involved', () => {
    it('should show ways to get involved', () => {
        GetInvolvedPage.navigate();

        GetInvolvedPage.findSections().should('have.length', 5);
    });
});
