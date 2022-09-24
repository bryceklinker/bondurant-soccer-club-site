import { FrequentlyAskedQuestionsPage } from '../support/frequently-asked-questions.page';

describe('Frequently Asked Questions', () => {
    it('should show categories of frequently asked questions', () => {
        FrequentlyAskedQuestionsPage.navigate();

        FrequentlyAskedQuestionsPage.findSections().should('have.length', 3);
    });
});
