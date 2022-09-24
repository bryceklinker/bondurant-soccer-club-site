import { ShellCommands } from './shell.commands';

export const PictureDayPage = {
    navigate: () => cy.visit('/picture-day'),
    findSchedule: () => cy.get('img'),
    findCompanyLink: () => ShellCommands.getMainContent().findByRole('link')
};
