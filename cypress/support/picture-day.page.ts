export const PictureDayPage = {
    navigate: () => cy.visit('/picture-day'),
    noSchedule: () => cy.findByLabelText('no schedule'),
};
