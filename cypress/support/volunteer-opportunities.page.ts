import { ShellCommands } from './shell.commands';

export const VolunteerOpportunitiesPage = {
    navigate: () => cy.visit('/volunteer-opportunities'),
    findSections: () => ShellCommands.getMainContent().findAllByRole('button')
};
