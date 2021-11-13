import {ShellCommands} from './shell.commands';

export const RefereeInfoPage = {
    navigate: () => cy.visit('/referee-info'),
    findSections: () => ShellCommands.getMainContent().findAllByRole('button'),
    findBecomeAReferee: () => ShellCommands.getMainContent().findByText('Become A Referee')
}
