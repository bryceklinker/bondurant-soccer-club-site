import {ShellCommands} from './shell.commands';

export const GetInvolvedPage = {
    navigate: () => cy.visit('/get-involved'),
    findSections: () => ShellCommands.getMainContent().findAllByRole('button')
}
