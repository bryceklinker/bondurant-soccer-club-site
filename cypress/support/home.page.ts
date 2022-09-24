import { ShellCommands } from './shell.commands';

export const HomePage = {
    navigate: () => cy.visit('/'),
    findRegister: () =>
        ShellCommands.getMainContent().findByRole('link', {
            name: 'register here'
        }),
    findJumpButtons: () =>
        ShellCommands.getMainContent().findAllByRole('button', {
            name: 'jump link'
        })
};
