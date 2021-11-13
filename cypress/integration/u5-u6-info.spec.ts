import {U5U6InfoPage} from '../support/u5-u6-info.page';

describe('U5/U6 Info', () => {
    it('should show U5/U6 Program info', () => {
        U5U6InfoPage.navigate();

        U5U6InfoPage.findSections().should('have.length', 5);
    })
})
