import { ShellCommands } from './shell.commands';

export const U5U6InfoPage = {
    navigate: () => cy.visit('/u5-u6-info'),
    findSections: () => ShellCommands.getMainContent().findAllByRole('button')
};
