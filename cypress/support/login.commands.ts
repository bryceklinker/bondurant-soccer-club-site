import {EndToEndConfig} from './config';

function login() {
    cy.log('Logging in using Google');
    cy.request({
        method: 'POST',
        url: EndToEndConfig.googleTokenUrl,
        body: {
            grant_type: 'refresh_token',
            client_id: EndToEndConfig.googleClientId,
            client_secret: EndToEndConfig.googleClientSecret,
            refresh_token: EndToEndConfig.googleRefreshToken
        }
    }).then((res) => {
        window.sessionStorage.setItem('auth-state', JSON.stringify({
            credentials: {
                credential: res.body.id_token,
                clientId: EndToEndConfig.googleClientId,
                select_by: 'btn'
            }
        }))
    })
}

export const LoginCommands = {
    login
}
