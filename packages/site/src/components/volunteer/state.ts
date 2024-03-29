import { PRESIDENTS } from '../../common/state/board-members';
import { RouteNames } from '../../common/routing/route-names';
import { LinkData } from '../../common/state/link-data';
import { BoardMemberData } from '../../common/state/board-member-data';
import { CONCESSION_SIGNUP_LINK } from './concessions/state';

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

export const DIRECTOR_OF_ACADEMY_LINKS: Array<LinkData> = [
    {
        text: 'Apply Here',
        url: RouteNames.DirectorOfAcademy
    },
    {
        text: 'Learn More',
        url: RouteNames.AcademyProgram
    }
];

export const SINGLE_TIME_VOLUNTEER_LINKS: Array<LinkData> = [
    {
        text: 'Single time volunteer sign up',
        url: 'https://www.signupgenius.com/go/10C094AABAC28A6F5C61-46996327-single'
    },
    {
        text: 'Concession volunteer sign up',
        url: CONCESSION_SIGNUP_LINK.url
    }
];

export const FULL_SEASON_VOLUNTEER_LINKS: Array<LinkData> = [
    {
        text: 'Sign up here',
        url: 'https://www.signupgenius.com/go/10C094AABAC28A6F5C61-bscvolunteer'
    }
];

export const BOARD_MEMBER_POSITION_LINKS: Array<LinkData> = [
    {
        text: 'Contact Club President',
        url: BoardMemberData.getMailToLink(PRESIDENTS)
    },
    {
        text: 'Current Board',
        url: RouteNames.ContactUs
    }
];

export const VOLUNTEER_REIMBURSEMENT_TEXT =
    'All reimbursements will be made at the end of each season and will be credited to the CC used for registration.';
