import { DIRECTORS_OF_CONCESSIONS } from '../../../common/state/board-members';
import { LinkData } from '../../../common/state/link-data';
import { BoardMemberData } from '../../../common/state/board-member-data';

export const CONCESSION_SIGNUP_LINK: LinkData = {
    text: 'Sign up here',
    url: 'https://www.signupgenius.com/go/10C094AABAC28A6F5C61-47010478-concession'
};
export const DIRECTOR_OF_CONCESSIONS_LINK: LinkData = {
    text: 'Director of Concessions',
    url: BoardMemberData.getMailToLink(DIRECTORS_OF_CONCESSIONS)
};
