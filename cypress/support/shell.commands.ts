export const ShellCommands = {
    findFacebookLink: () =>
        cy.findByRole('link', { name: 'find us on facebook' }),
    findHomeLink: () =>
        ShellCommands.getNavbar().findByRole('link', { name: 'Home' }),
    findGetInvolvedLink: () =>
        ShellCommands.getNavbar().findByRole('link', { name: 'Get Involved' }),
    findContactUsLink: () =>
        ShellCommands.getNavbar().findByRole('link', { name: 'Contact Us' }),
    findAboutLink: () =>
        ShellCommands.getNavbar().findByRole('link', { name: 'About' }),
    findLocationsLink: () =>
        ShellCommands.getNavbar().findByRole('link', { name: 'Locations' }),
    findSchedulesLink: () =>
        ShellCommands.getNavbar().findByRole('link', { name: 'Schedules' }),
    openMoreInfo: () =>
        ShellCommands.getNavbar()
            .findByRole('button', { name: 'more nav button' })
            .click(),
    findDocumentsLink: () => cy.findByRole('link', { name: 'Documents' }),
    findConcessionsLink: () => cy.findByRole('link', { name: 'Concessions' }),
    findFAQLink: () => cy.findByRole('link', { name: 'FAQ' }),
    findPictureDayLink: () => cy.findByRole('link', { name: 'Picture Day' }),
    findProgramInfoLink: () => cy.findByRole('link', { name: 'Program Info' }),
    findRefereeInfoLink: () => cy.findByRole('link', { name: 'Referee Info' }),
    findRegistrationInfoLink: () =>
        cy.findByRole('link', { name: 'Registration Info' }),
    findSponsorshipInfoLink: () =>
        cy.findByRole('link', { name: 'Sponsorship Info' }),
    findU5U6InfoLink: () => cy.findByRole('link', { name: 'U5/U6 Info' }),
    findUniformInfoLink: () => cy.findByRole('link', { name: 'Uniform Info' }),
    findCopyright: () => cy.findByLabelText('copyright'),
    getMainContent: () => cy.get('.main-content'),
    getNavbar: () => cy.get('nav')
};
