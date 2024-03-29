import { AGE_GROUPS } from '../../common/state/age-groups';
import { RouteNames } from '../../common/routing/route-names';
import { ProgramInfo } from '../../common/state/program-info';
import {
    BONDURANT_RECREATIONAL_SPORTS_COMPLEX_LOCATION,
    COLLISON_SOCCER_PARK_LOCATION
} from '../locations/state';

const U7U8Program: ProgramInfo = {
    title: AGE_GROUPS.U8.name,
    attributes: [
        {
            name: 'Uniform',
            link: {
                text: 'Uniform Info',
                url: RouteNames.UniformInfo
            }
        },
        {
            name: 'Locations',
            text: 'U7/U8 program will be all “in-house” meaning there will be no travel. All games will be at the',
            link: {
                text: COLLISON_SOCCER_PARK_LOCATION.title,
                url: RouteNames.Locations
            }
        },
        {
            name: 'Number of Games',
            text: '8'
        },
        {
            name: 'Practice and Game Days & Time',
            details: [
                'Girls will have games on Saturday mornings between 11:00 AM - 1:00 PM',
                'Boys will have games on Sunday afternoons between 12:00 PM - 3:00 PM'
            ]
        },
        {
            name: "Access this season's schedule here",
            link: {
                text: 'Schedules',
                url: RouteNames.Schedules
            }
        },
        {
            name: 'Game Length',
            text: '4 - 10 minute quarters (5 minutes breaks between quarters)'
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
                'No jewelry, no metal headbands, barrettes, bobby pins, or clips in the hair.'
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

const U9U10Program: ProgramInfo = {
    title: AGE_GROUPS.U10.name,
    attributes: [
        {
            name: 'Uniform',
            link: {
                text: 'Uniform Info',
                url: RouteNames.UniformInfo
            }
        },
        {
            name: 'Locations',
            details: [
                `Practices take place at the ${COLLISON_SOCCER_PARK_LOCATION.title} as scheduled by Coach`,
                `Home games take place at the ${COLLISON_SOCCER_PARK_LOCATION.title}`,
                'Up to 4 games may result in travel around central iowa'
            ],
            link: {
                text: 'Collison Socer Park',
                url: RouteNames.Locations
            }
        },
        { name: 'Number of Games', text: '7' },
        {
            name: 'Game Days/Times',
            details: [
                'Girls Saturdays 9:00 AM - 1:00 PM',
                'Coed Sundays 1:00 PM - 6:00 PM'
            ]
        },
        { name: 'Game Length', text: '2 - 25 minute halves' },
        { name: 'Maximum Player Roster', text: '12' },
        { name: 'Game Play', text: '7 v 7' },
        { name: 'Ball Size', text: '4' },
        { name: 'Goalkeeper', text: 'Yes' },
        {
            name: 'Referee',
            details: [
                'Certified Center Referee',
                '2 Certified Assistant Referees'
            ]
        },
        {
            name: 'Rules',
            details: [
                'Every player should play a minimum of 50% of the time in each game',
                'Results and standings should not be recorded',
                'Any travel should be limited to no more than an hour away',
                'Deliberate heading is not allowed in 7v7 games',
                'If a player deliberately heads the ball in a game, an indirect free kick should be awarded to the opposing team from the spot of the offense',
                'The build out line promotes playing the ball out of the back in a less pressured setting',
                'When the goalkeeper has the ball in his or her hands during play from the opponent, the opposing team must move behind the build out line until the ball is put into play',
                'Once the opposing team is behind the build out line, the goalkeeper can pass, throw or roll the ball into play (punts and drop kicks are not allowed)',
                'After the ball is put into play by the goalkeeper, the opposing team can cross the build out line and play resumes as normal',
                'The opposing team must also move behind the build out line during a goal kick until the ball is put into play',
                'The build out line will also be used to denote where offside offenses can be called',
                'Players cannot be penalized for an offside offense between the halfway line and the build out line',
                'Players can be penalized for an offside offense between the build out line and goal line',
                'However, the goalkeeper can put the ball into play sooner but he or she does so accepting the positioning of the opponents and the consequences of how play resumes.',
                'Game may not start or continue if there are less than 5 players on a team',
                'Substitutions are unlimited and can occur at any stoppage'
            ]
        },
        {
            name: 'Standard Laws of the Game',
            details: [
                'Law 4 – Players’ Equipment',
                'Law 8 – Start and Restart of Play',
                'Law 9 – Ball In and Out of Play',
                'Law 10 – Method of Scoring',
                'Law 11 – Offside',
                'Law 12 – Fouls and Misconduct* (*With the exception of deliberate heading and punting)',
                'Law 13 – Free Kicks',
                'Law 14 – Penalty Kick',
                'Law 15 – Throw-in',
                'Law 16 – Goal Kick',
                'Law 17 – Corner kick'
            ]
        }
    ]
};
const U11U12Program: ProgramInfo = {
    title: AGE_GROUPS.U12.name,
    attributes: [
        {
            name: 'Uniform',
            link: {
                text: 'Uniform Info',
                url: RouteNames.UniformInfo
            }
        },
        {
            name: 'Locations',
            details: [
                `Practices take place at the ${BONDURANT_RECREATIONAL_SPORTS_COMPLEX_LOCATION.title} as scheduled by Coach`,
                `Home games take place at the ${BONDURANT_RECREATIONAL_SPORTS_COMPLEX_LOCATION.title}`,
                'Up to 4 games may result in travel around central iowa'
            ],
            link: {
                text: BONDURANT_RECREATIONAL_SPORTS_COMPLEX_LOCATION.title,
                url: RouteNames.Locations
            }
        },
        { name: 'Number of Games', text: '7' },
        {
            name: 'Game Days/Times',
            details: [
                'Girls Sundays 1:00 PM - 6:00 PM',
                'Coed Sundays 1:00 PM - 6:00 PM'
            ]
        },
        { name: 'Game Length', text: '2 - 30 minute halves' },
        { name: 'Maximum Player Roster', text: '16' },
        { name: 'Game Play', text: '9 v 9' },
        { name: 'Ball Size', text: '4' },
        { name: 'Goalkeeper', text: 'Yes' },
        {
            name: 'Referee',
            details: [
                'Certified Center Referee',
                '2 Certified Assistant Referees'
            ]
        },
        {
            name: 'Rules',
            details: [
                'All rules apply.',
                'Any travel should be limited to day trips with limited allowances for overnight stays',
                'Deliberate heading is not allowed in U11 games. Heading is currently allowed in U12 games without limitations but membership is empowered to limit or ban heading at this level of play'
            ]
        },
        {
            name: 'Standard Laws of the Game',
            details: [
                'Law 4 – Players’ Equipment',
                'Law 5 – The Referee',
                'Law 8 – Start and Restart of Play',
                'Law 9 – Ball In and Out of Play',
                'Law 10 – Method of Scoring',
                'Law 11 – Offside',
                'Law 12 – Fouls and Misconduct* (*With the exception of deliberate heading in U11 games)',
                'Law 13 – Free Kicks',
                'Law 14 – Penalty Kick',
                'Law 15 – Throw-in',
                'Law 16 – Goal Kick',
                'Law 17 – Corner kick'
            ]
        }
    ]
};
const U13U14Program: ProgramInfo = {
    title: AGE_GROUPS.U14.name,
    attributes: [
        {
            name: 'Uniform',
            link: {
                text: 'Uniform Info',
                url: RouteNames.UniformInfo
            }
        },
        {
            name: 'Locations',
            details: [
                'Practices take place at the Bondurant Soccer Complex as scheduled by Coach',
                `Home games take place at the ${BONDURANT_RECREATIONAL_SPORTS_COMPLEX_LOCATION.title}`,
                'Up to 4 games may result in travel around central iowa'
            ],
            link: {
                text: BONDURANT_RECREATIONAL_SPORTS_COMPLEX_LOCATION.title,
                url: RouteNames.Locations
            }
        },
        { name: 'Number of Games', text: '7' },
        {
            name: 'Game Days/Times',
            details: [
                'Girls Sundays 1:00 PM - 6:00 PM',
                'Coed Sundays 1:00 PM - 6:00 PM'
            ]
        },
        { name: 'Game Length', text: '2 - 35 minute halves' },
        {
            name: 'Maximum Player Roster',
            text: '22 (only 18 can attend games at any 1 time)'
        },
        { name: 'Game Play', text: '11 v 11' },
        { name: 'Ball Size', text: '5' },
        { name: 'Goalkeeper', text: 'Yes' },
        {
            name: 'Referee',
            details: [
                'Certified Center Referee',
                '2 Certified Assistant Referees'
            ]
        }
    ]
};
const U15U16Program: ProgramInfo = {
    title: AGE_GROUPS.U16.name,
    attributes: [
        {
            name: 'Uniform',
            link: {
                text: 'Uniform Info',
                url: RouteNames.UniformInfo
            }
        },
        {
            name: 'Locations',
            details: [
                `Practices take place at the ${BONDURANT_RECREATIONAL_SPORTS_COMPLEX_LOCATION.title} as scheduled by Coach`,
                `Home games take place at the ${BONDURANT_RECREATIONAL_SPORTS_COMPLEX_LOCATION.title}`,
                'Up to 4 games may result in travel around central iowa'
            ],
            link: {
                text: BONDURANT_RECREATIONAL_SPORTS_COMPLEX_LOCATION.title,
                url: RouteNames.Locations
            }
        },
        { name: 'Number of Games', text: '7' },
        {
            name: 'Game Days/Times',
            details: [
                'Girls Sundays 1:00 PM - 7:00 PM',
                'Coed Sundays 1:00 PM - 7:00 PM'
            ]
        },
        { name: 'Game Length', text: '2 - 40 minute halves' },
        {
            name: 'Maximum Player Roster',
            text: '22 (only 18 can attend games at any 1 time)'
        },
        { name: 'Game Play', text: '11 v 11' },
        { name: 'Ball Size', text: '5' },
        { name: 'Goalkeeper', text: 'Yes' },
        {
            name: 'Referee',
            details: [
                'Certified Center Referee',
                '2 Certified Assistant Referees'
            ]
        }
    ]
};
const U17U19Program: ProgramInfo = {
    title: `${AGE_GROUPS.U19.name} (only offered in the fall season unless enough registrations in the spring)`,
    attributes: [
        {
            name: 'Uniform',
            link: {
                text: 'Uniform Info',
                url: RouteNames.UniformInfo
            }
        },
        {
            name: 'Locations',
            details: [
                `Practices take place at the ${BONDURANT_RECREATIONAL_SPORTS_COMPLEX_LOCATION.title} as scheduled by Coach`,
                `Home games take place at the ${BONDURANT_RECREATIONAL_SPORTS_COMPLEX_LOCATION.title}`,
                'Up to 4 games may result in travel around central iowa'
            ],
            link: {
                text: BONDURANT_RECREATIONAL_SPORTS_COMPLEX_LOCATION.title,
                url: RouteNames.Locations
            }
        },
        { name: 'Number of Games', text: '7' },
        {
            name: 'Game Days/Times',
            details: [
                'Girls Sundays 1:00 PM - 7:00 PM',
                'Coed Sundays 1:00 PM - 7:00 PM'
            ]
        },
        { name: 'Game Length', text: '2 - 45 minute halves' },
        {
            name: 'Maximum Player Roster',
            text: '22 (only 18 can attend games at any 1 time)'
        },
        { name: 'Game Play', text: '11 v 11' },
        { name: 'Ball Size', text: '5' },
        { name: 'Goalkeeper', text: 'Yes' },
        {
            name: 'Referee',
            details: [
                'Certified Center Referee',
                '2 Certified Assistant Referees'
            ]
        }
    ]
};
const ShortSided: ProgramInfo = {
    title: 'Short-Sided (U13 - U19)',
    description:
        'Occasionally if there are not enough players to form a full sized team a smaller “short-sided” team is created.',
    attributes: [
        {
            name: 'Uniform',
            link: {
                text: 'Uniform Info',
                url: RouteNames.UniformInfo
            }
        },
        {
            name: 'Locations',
            details: [
                `Practices take place at the ${BONDURANT_RECREATIONAL_SPORTS_COMPLEX_LOCATION.title} as scheduled by Coach`,
                `Home games take place at the ${BONDURANT_RECREATIONAL_SPORTS_COMPLEX_LOCATION.title}`,
                'Up to 4 games may result in travel around central iowa'
            ],
            link: {
                text: BONDURANT_RECREATIONAL_SPORTS_COMPLEX_LOCATION.title,
                url: RouteNames.Locations
            }
        },
        { name: 'Number of Games', text: '7' },
        {
            name: 'Game Days/Times',
            details: [
                'Girls Saturdays or Sundays 1:00 PM - 6:00 PM',
                'Coed Sundays 1:00 PM - 6:00 PM'
            ]
        },
        {
            name: 'Game Length',
            text: 'Same as length for full sided team for division'
        },
        { name: 'Maximum Player Roster', text: '14' },
        { name: 'Game Play', text: '6 v 6' },
        { name: 'Ball Size', text: '5' },
        { name: 'Goalkeeper', text: 'Yes' },
        {
            name: 'Referee',
            details: [
                'Certified Center Referee',
                '2 Certified Assistant Referees'
            ]
        }
    ]
};
export const PROGRAMS: Array<ProgramInfo> = [
    U7U8Program,
    U9U10Program,
    U11U12Program,
    U15U16Program,
    U17U19Program,
    ShortSided
];
