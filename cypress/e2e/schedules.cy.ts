import { SchedulesPage } from '../support/schedules.page';

describe('Schedules', () => {
    it('should show schedules', () => {
        SchedulesPage.navigate();

        SchedulesPage.findSections().should('have.length', 3);
    });
});
