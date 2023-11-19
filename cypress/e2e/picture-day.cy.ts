import { PictureDayPage } from '../support/picture-day.page';

describe('Picture Day', () => {
    it('should show picture day information', () => {
        PictureDayPage.navigate();

        PictureDayPage.noSchedule().should('be.visible')
    });
});
