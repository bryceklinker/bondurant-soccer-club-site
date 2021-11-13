import {ShellCommands} from './shell.commands';

export const DocumentsPage = {
    navigate: () => cy.visit('/documents'),
    findSections: () => ShellCommands.getMainContent().findAllByRole('button')
}
