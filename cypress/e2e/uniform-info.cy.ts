import { UniformInfoPage } from '../support/uniform-info.page';

describe('Uniform Info', () => {
    it('should show uniform information', () => {
        UniformInfoPage.navigate();

        UniformInfoPage.findSections().should('have.length', 3);
    });
});
