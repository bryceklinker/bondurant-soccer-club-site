import {ShellCommands} from './shell.commands';

export const UniformInfoPage = {
    navigate: () => cy.visit('/uniform-info'),
    findSections: () => ShellCommands.getMainContent().findAllByRole('button')
};
