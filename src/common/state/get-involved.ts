import {BoardMemberData, GetInvolvedData, LinkData} from './models';
import {BecomeACoach} from '../../get-involved/BecomeACoach';
import {BecomeAReferee} from '../../get-involved/BecomeAReferee';
import {RouteNames} from '../routing';
import {DIRECTORS_OF_COACHES, DIRECTORS_OF_FIELDS, DIRECTORS_OF_REFEREES, PRESIDENTS} from './board-members';

const LAWS_OF_THE_GAME: LinkData = {
    text: 'Laws of the Game',
    url: 'https://www.theifab.com/documents'
}

export const GET_INVOLVED_OPTIONS: Array<GetInvolvedData> = [
    {
        title: 'Become A Coach',
        description: BecomeACoach,
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
        description: BecomeAReferee,
        links: [
            {
                text: 'Referee License',
                url: 'https://learning.ussoccer.com/referee'
            },
            LAWS_OF_THE_GAME,
            {
                text: 'Contact Director of Referees',
                url: `mailto:${BoardMemberData.getMailtoEmails(DIRECTORS_OF_REFEREES)}`
            },
            {
                text: 'Terry Vaughn Referee Academy',
                url: 'http://www.iowasoccer.org/terry_vaughn_referee_academy/'
            },
            {
                text: 'Free Online Modules',
                url: 'http://www.iowasoccer.org/recertification_modules/'
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

export const COACHING_DRILLS: Array<LinkData> = [
    {
        text: 'Games for U5/U6/U7 and U8',
        url: 'https://www.soccerxpert.com/u6-u8-soccer-drills.aspx'
    },
    {
        text: 'Games for U6 to U8',
        url: 'http://www.freeyouthsoccerdrills.com/free-soccer-drills.html'
    },
    {
        text: 'Games for U6 to U8',
        url: 'https://www.soccercoachweekly.net/tag/u6/'
    },
    {
        text: 'Games for U6 all the way to U14',
        url: 'http://www.coachingsoccer101.com/drills.htm'
    }
]
