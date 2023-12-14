import {ProgramInfo} from '../../common/state/program-info';
import {AGE_GROUPS} from '../../common/state/age-groups';
import {RouteNames} from '../../common/routing/route-names';

export const U5U6ProgramInfo: ProgramInfo = {
    title: `${AGE_GROUPS.U6.name} Details`,
    attributes: [
        {
            name: 'Locations',
            text: 'U5/U6 program will be all “in-house” meaning there will be no travel. All games will be at the',
            link: {
                text: 'Collison Soccer Park',
                url: RouteNames.Locations
            }
        },
        {
            name: 'Practice and Game Days & Time',
            details: [
                'U5 - Tuesdays 6 - 6:45 PM & Saturdays 8:30 - 9:15 AM',
                'U6 - Thursdays 6 - 6:45 PM & Saturdays 9:45 - 10:30 AM'
            ]
        },
        {
            name: 'Access this season\'s schedule here',
            link: {
                text: 'Schedules',
                url: RouteNames.Schedules
            }
        },
        {
            name: 'Game Length',
            text: '6 - 6-minute quarters (5 minutes breaks between quarters)'
        },
        {
            name: 'Maximum Game Roster',
            text: '8'
        },
        {
            name: 'Game Play',
            text: '4 v 4'
        },
        {
            name: 'Ball Size',
            text: '3'
        },
        {
            name: 'Required Equipment',
            text: 'Shin Guards'
        },
        {
            name: 'Goalkeeper',
            text: 'No'
        },
        {
            name: 'Referee',
            text: 'No, registered and certified referees are not needed at this level. Since there is no referee, coaches are expected to manage the game environment from the touchline using these standards of play and their best judgment.'
        },
        {
            name: 'Rules',
            details: [
                'Together, coaches and parents are expected to create and promote a fun and safe environment for the players.',
                'Substitutions are unlimited and can occur at any time.',
                'Kickoffs, free kicks, throw-ins, goal kicks, and corner kicks are used to start or restart play',
                'There are throw-ins from the sides. Both feet should stay down.',
                'Opponents should be 10 feet away from the ball on all restarts.',
                'If used, all free kicks are indirect.',
                'No heading or slide tackles. An indirect free kick will be awarded to the opposing team from the spot of the offense.',
                'On GOAL KICKS the defense must retreat to the half-field line (or build-out line) until the ball is kicked. Goal kicks and corner kicks should be taken in the general vicinity of the respective goal or corner.',
                'Switch sides at half-time.',
                'No off-sides.',
                'No penalty kicks.',
                'Referees will be young kids - be kind!',
                'Focus on dribbling, some passing, and a diamond shape.',
                'No player may be in the goal box unless they are going after the ball (no goalie).',
                'Defenders should move between the goal box and the midfield line depending on where the ball is on the field (They should not be standing in the backfield waiting).',
                'No player cards or rosters are needed at this age.',
                'No jewelry, no metal headbands, barrettes, bobby pins, or clips in the hair.',
            ]
        },
        {
            name: 'Cancellations',
            text: 'The home team (blue) decides if games are canceled due to weather. The home team should be reaching out to the visiting team as soon as possible to reschedule or cancel.'
        },
        {
            name: 'Sidelines',
            text: 'All players and coaches are on one side of the field, and all spectators are on the other side of the field.'
        },
        {
            name: 'Half-time Decision',
            text: 'If one team is dominating the other, coaches and referees will meet at half-time. The weaker team may add one extra player to the field after a meeting has occurred.'
        }
    ]
};
