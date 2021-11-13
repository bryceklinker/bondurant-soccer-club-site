import {ShellCommands} from './shell.commands';

export const ProgramInfoPage = {
    navigate: () => cy.visit('/program-info'),
    findSections: () => ShellCommands.getMainContent().findAllByRole('button')
}
