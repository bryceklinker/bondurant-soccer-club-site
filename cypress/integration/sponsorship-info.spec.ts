import { SponsorshipInfoPage } from '../support/sponsorship-info.page';

describe('Sponsorship Info', () => {
    it('should show sponsorship info', () => {
        SponsorshipInfoPage.navigate();

        SponsorshipInfoPage.findSponsorLinks().should(
            'have.length.greaterThan',
            0
        );
        SponsorshipInfoPage.findSections().should('have.length', 1);
    });
});
