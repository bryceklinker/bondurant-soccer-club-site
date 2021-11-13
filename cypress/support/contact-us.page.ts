import {ShellCommands} from './shell.commands';

export const ContactUsPage = {
    navigate: () => cy.visit('/contact-us'),
    findSections: () => ShellCommands.getMainContent().findAllByRole('button')
};
