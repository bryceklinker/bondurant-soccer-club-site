import { ShellCommands } from './shell.commands';

export const SponsorshipInfoPage = {
    navigate: () => cy.visit('/sponsorship-info'),
    findSponsorLinks: () =>
        ShellCommands.getMainContent().findAllByRole('link'),
    findSections: () => ShellCommands.getMainContent().findAllByRole('button')
};
