export const EndToEndConfig = {
    googleTokenUrl: 'https://www.googleapis.com/oauth2/v4/token',
    googleClientId: Cypress.env('GOOGLE_AUTH_CLIENT_ID'),
    googleClientSecret: Cypress.env('GOOGLE_AUTH_CLIENT_SECRET'),
    googleRefreshToken: Cypress.env('GOOGLE_AUTH_REFRESH_TOKEN')
}
