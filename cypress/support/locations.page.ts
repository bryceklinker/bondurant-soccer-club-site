import { ShellCommands } from './shell.commands';

export const LocationsPage = {
    navigate: () => cy.visit('/locations'),
    findSections: () => ShellCommands.getMainContent().findAllByRole('button')
};
