import { LocationsPage } from '../support/locations.page';

describe('Locations', () => {
    it('should show locations', () => {
        LocationsPage.navigate();

        LocationsPage.findSections().should('have.length', 2);
    });
});
