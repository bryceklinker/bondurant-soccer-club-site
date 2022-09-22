import { ShellCommands } from './shell.commands';

export const SchedulesPage = {
    navigate: () => cy.visit('/schedules'),
    findSections: () => ShellCommands.getMainContent().findAllByRole('button')
};
