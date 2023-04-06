

export const AlertsPage = {
    navigate: () => cy.visit('/alerts'),
    createAlertButton: () => cy.findByRole('button', {name: 'create alert'}),
    alertTextInput: () => cy.findByRole('textbox', {name: 'text'}),
    saveAlertButton: () => cy.findByRole('button', {name: 'save button'})
}
