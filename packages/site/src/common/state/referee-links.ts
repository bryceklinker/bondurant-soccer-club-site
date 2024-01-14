import {LinkData} from './link-data';
import {BoardMemberData} from './board-member-data';
import {DIRECTORS_OF_REFEREES} from './board-members';

export const DIRECTOR_OF_REFEREES_CONTACT_LINK: LinkData = {
    text: 'Director of Referees',
    url: BoardMemberData.getMailToLink(DIRECTORS_OF_REFEREES)
};
export const REFEREE_LINKS: LinkData[] = [
    {
        text: 'Referee License',
        url: 'https://learning.ussoccer.com/referee'
    },
    {
        text: 'Laws of the Game',
        url: 'https://www.theifab.com/documents/?documentType=all&language=en'
    },
    {
        text: 'Contact the Director of Referees',
        url: DIRECTOR_OF_REFEREES_CONTACT_LINK.url
    }
]
