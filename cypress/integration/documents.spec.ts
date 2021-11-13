import {DocumentsPage} from '../support/documents.page';

describe('Documents', () => {
    it('should show documents', () => {
        DocumentsPage.navigate();

        DocumentsPage.findSections().should('have.length', 5);
    })
})
