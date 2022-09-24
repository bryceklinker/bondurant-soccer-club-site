import { ProgramInfoPage } from '../support/program-info.page';

describe('Program Info', () => {
    it('should show each program', () => {
        ProgramInfoPage.navigate();

        ProgramInfoPage.findSections().should('have.length', 6);
    });
});
