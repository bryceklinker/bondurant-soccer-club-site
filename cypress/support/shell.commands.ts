export const ShellCommands = {
    findFacebookLink: () =>
        cy.findByRole('link', { name: 'find us on facebook' }),
    findHomeLink: () =>
        ShellCommands.getNavbar().findByRole('link', { name: 'Home' }),
    findVolunteerLink: () =>
        ShellCommands.getNavbar().findByRole('link', { name: 'Volunteer' }),
    findContactUsLink: () =>
        ShellCommands.getNavbar().findByRole('link', { name: 'Contact Us' }),
    findAboutLink: () =>
        ShellCommands.getNavbar().findByRole('link', { name: 'About' }),
    findLocationsLink: () =>
        ShellCommands.getNavbar().findByRole('link', { name: 'Locations' }),
    findSchedulesLink: () =>
        ShellCommands.getNavbar().findByRole('link', { name: 'Schedules' }),
    openMoreInfo: () => {
        cy.wait(200);
        ShellCommands.getNavbar()
            .findByRole('button', { name: 'more info' })
            .click();
    },
    findDocumentsLink: () => cy.findByRole('menuitem', { name: 'Documents' }),
    findFAQLink: () => cy.findByRole('menuitem', { name: 'FAQ' }),
    findPictureDayLink: () =>
        cy.findByRole('menuitem', { name: 'Picture Day' }),
    findProgramInfoLink: () =>
        cy.findByRole('menuitem', { name: 'Program Info' }),
    findRegistrationInfoLink: () =>
        cy.findByRole('menuitem', { name: 'Registration Info' }),
    findSponsorshipInfoLink: () =>
        cy.findByRole('menuitem', { name: 'Sponsorship Info' }),
    findU5U6InfoLink: () => cy.findByRole('menuitem', { name: 'U5/U6 Info' }),
    findUniformInfoLink: () =>
        cy.findByRole('menuitem', { name: 'Uniform Info' }),
    findCopyright: () => cy.findByLabelText('copyright'),
    getMainContent: () => cy.get('.main'),
    getNavbar: () => cy.get('nav')
};
