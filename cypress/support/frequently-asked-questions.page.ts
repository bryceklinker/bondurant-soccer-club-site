import {ShellCommands} from './shell.commands';

export const FrequentlyAskedQuestionsPage = {
    navigate: () => cy.visit('/frequently-asked-questions'),
    findSections: () => ShellCommands.getMainContent().findAllByRole('button')
}
