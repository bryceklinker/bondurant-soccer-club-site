import { BoardMemberData, LinkData } from './models';
import { DIRECTORS_OF_CONCESSIONS } from './board-members';

export const CONCESSION_SIGNUP_LINK: LinkData = {
    text: 'Signup',
    url: 'https://signup.com/go/vUuikiY'
};

export const DIRECTOR_OF_CONCESSIONS_LINK: LinkData = {
    text: 'Director of Concessions',
    url: `mailto:${BoardMemberData.getMailtoEmails(DIRECTORS_OF_CONCESSIONS)}`
};
