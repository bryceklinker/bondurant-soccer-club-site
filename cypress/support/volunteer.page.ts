import { ShellCommands } from './shell.commands';

export const VolunteerPage = {
    navigate: () => cy.visit('/volunteer'),
    findSections: () => ShellCommands.getMainContent().findAllByRole('button'),
};
