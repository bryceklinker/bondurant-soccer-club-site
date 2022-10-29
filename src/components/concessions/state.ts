import { BoardMemberData, LinkData } from '../../common/state/models';
import { DIRECTORS_OF_CONCESSIONS } from '../../common/state/board-members';

export const CONCESSION_SIGNUP_LINK: LinkData = {
    text: 'Signup',
    url: 'https://signup.com/go/vUuikiY'
};
export const DIRECTOR_OF_CONCESSIONS_LINK: LinkData = {
    text: 'Director of Concessions',
    url: `mailto:${BoardMemberData.getMailtoEmails(DIRECTORS_OF_CONCESSIONS)}`
};
