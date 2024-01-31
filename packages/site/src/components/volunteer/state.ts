import { BecomeACoach } from './BecomeACoach';
import {
    DIRECTORS_OF_COACHES,
    DIRECTORS_OF_FIELDS,
    DIRECTORS_OF_REFEREES,
    PRESIDENTS
} from '../../common/state/board-members';
import { BecomeAReferee } from './BecomeAReferee';
import { RouteNames } from '../../common/routing/route-names';
import { LinkData } from '../../common/state/link-data';
import { BoardMemberData } from '../../common/state/board-member-data';
import { VolunteerData } from '../../common/state/volunteer-data';
import { ConcessionsOpportunities } from './concessions/ConcessionsOpportunities';
import { RefereeOpportunities } from './referees/RefereeOpportunities';

export const LAWS_OF_THE_GAME: LinkData = {
    text: 'Laws of the Game',
    url: 'https://www.theifab.com/documents'
};
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
];

export const VOLUNTEER_OPTIONS: Array<VolunteerData> =
    [
        {
            title: "Full Season Volunteer - one child's registration fee is reimbursable",
            links: [
                {
                    text: 'Sing up here',
                    url: 'https://www.signupgenius.com/go/10C094AABAC28A6F5C61-bscvolunteer'
                }
            ]
        },
        {
            title: 'Single Time Volunteer - volunteer fee is reimbursed',
            links: [
                {
                    text: 'Sign up here',
                    url: 'https://www.signupgenius.com/go/10C094AABAC28A6F5C61-46996327-single'
                }
            ]
        },
        {
            title: 'Concessions - volunteer fee is reimbursed and one paid position',
            description: ConcessionsOpportunities,
            links: []
        },
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
                    url: BoardMemberData.getMailToLink(DIRECTORS_OF_COACHES)
                }
            ]
        },
        {
            title: 'Become A Referee - paid positions',
            description: RefereeOpportunities,
            links: []
        },
        {
            title: "Become A Board Member - child's registration is waived",
            description:
                'Attend monthly meetings, volunteer to help the club succeed, make strategic decisions for the entire Bondurant Soccer Family',
            links: [
                {
                    text: 'Contact',
                    url: BoardMemberData.getMailToLink(PRESIDENTS)
                },
                {
                    text: 'Current Board',
                    url: RouteNames.ContactUs
                }
            ]
        },
        {
            title: 'Director of Academy - one paid position',
            description:
                'Help cultivate youth players interested in learning and achieving more before transitioning to higher level soccer.',
            links: [
                {
                    text: 'Apply Here',
                    url: RouteNames.DirectorOfAcademy
                },
                {
                    text: 'Learn More',
                    url: RouteNames.AcademyProgram
                }
            ]
        }
    ];
