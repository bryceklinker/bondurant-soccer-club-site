import { HomePage } from '../support/home.page';

describe('Home', () => {
    it('should show home page content', () => {
        HomePage.navigate();

        HomePage.findRegister().should('be.visible');
        HomePage.findJumpButtons().should('have.length', 4);
    });
});
