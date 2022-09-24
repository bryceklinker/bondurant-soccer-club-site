import { ShellCommands } from './shell.commands';

export const ConcessionsPage = {
    navigate: () => cy.visit('/concessions'),
    findSections: () => ShellCommands.getMainContent().findAllByRole('button')
};
