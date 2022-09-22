import { ShellCommands } from './shell.commands';

export const RegistrationInfoPage = {
    navigate: () => cy.visit('/registration-info'),
    findRegistrationLink: () =>
        ShellCommands.getMainContent().findByRole('link'),
    findSections: () => ShellCommands.getMainContent().findAllByRole('button')
};
