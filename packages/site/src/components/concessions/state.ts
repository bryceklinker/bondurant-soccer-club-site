import { DIRECTORS_OF_CONCESSIONS } from '../../common/state/board-members';
import { LinkData } from '../../common/state/link-data';
import { BoardMemberData } from '../../common/state/board-member-data';

export const CONCESSION_SIGNUP_LINK: LinkData = {
    text: 'Signup',
    url: 'https://signup.com/go/vUuikiY'
};
export const DIRECTOR_OF_CONCESSIONS_LINK: LinkData = {
    text: 'Director of Concessions',
    url: BoardMemberData.getMailToLink(DIRECTORS_OF_CONCESSIONS)
};
