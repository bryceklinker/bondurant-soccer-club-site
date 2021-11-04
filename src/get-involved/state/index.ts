import {LinkData, RouteNames} from '../../common';
import {
    BoardMemberData,
    DIRECTORS_OF_COACHES,
    DIRECTORS_OF_FIELDS,
    DIRECTORS_OF_REFEREES, PRESIDENTS
} from '../../contact-us/state';

export interface GetInvolvedData {
    title: string;
    description: string;
    links: Array<LinkData>;
}

const LAWS_OF_THE_GAME: LinkData = {
    text: 'Laws of the Game',
    url: 'https://www.theifab.com/documents'
}

export const GET_INVOLVED_OPTIONS: Array<GetInvolvedData> = [
    {
        title: 'Become A Coach',
        description: 'set up practices, work with the kids, enjoy the game, learn lots from the kids.',
        links: [
            {
                text: 'Coaching License',
                url: 'https://learning.ussoccer.com/coach'
            },
            LAWS_OF_THE_GAME,
            {
                text: 'Contact Director of Coaches',
                url: `mailto:${BoardMemberData.getMailtoEmails(DIRECTORS_OF_COACHES)}`
            }
        ]
    },
    {
        title: 'Become A Referee',
        description: 'attend monthly meetings, volunteer to help the club succeed, make strategic decisions for the entire Bondurant Soccer Family',
        links: [
            {
                text: 'Referee License',
                url: 'https://learning.ussoccer.com/referee'
            },
            LAWS_OF_THE_GAME,
            {
                text: 'Contact Director of Referees',
                url: `mailto:${BoardMemberData.getMailtoEmails(DIRECTORS_OF_REFEREES)}`
            }
        ]
    },
    {
        title: 'Field Maintenance',
        description: 'picking up trash around the field that you may see before/during/after a game or practice. Help put up/take down goals and nets; set up/take down fields for the season; clean/ready the concession stand. Typically at the beginning and end of each season. Use a riding mower to trim the fields in preparation for practices and games. Paint field lines with a nice sprayer to allow you to help keep the field lines visible to all.',
        links: [
            {
                text: 'Contact Director of Fields',
                url: `mailto:${BoardMemberData.getMailtoEmails(DIRECTORS_OF_FIELDS)}`
            }
        ]
    },
    {
        title: 'Become A Board Member',
        description: 'attend monthly meetings, volunteer to help the club succeed, make strategic decisions for the entire Bondurant Soccer Family',
        links: [
            {
                text: 'Contact',
                url: `mailto:${BoardMemberData.getMailtoEmails(PRESIDENTS)}`
            },
            {
                text: 'Current Board',
                url: RouteNames.ContactUs
            }
        ]
    },

];
