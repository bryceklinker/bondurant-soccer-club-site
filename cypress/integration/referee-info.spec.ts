import { RefereeInfoPage } from '../support/referee-info.page';

describe('Referee Info', () => {
    it('should show referee info', () => {
        RefereeInfoPage.navigate();

        RefereeInfoPage.findBecomeAReferee().should('be.visible');
        RefereeInfoPage.findSections().should('have.length', 2);
    });
});
