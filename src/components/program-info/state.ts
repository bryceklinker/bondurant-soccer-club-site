import { AGE_GROUPS } from '../../common/state/age-groups';
import { RouteNames } from '../../common/routing/route-names';
import { ProgramInfo } from '../../common/state/program-info';

const U7U8Program: ProgramInfo = {
    title: AGE_GROUPS.U8.name,
    attributes: [
        {
            name: 'Rules',
            details: [
                'Players: 4 v 4',
                'There are throw-ins from the sides. Both feet should stay down.',
                'Corner kicks: other team back 3-5 feet',
                'No heading or slide tackles',
                'On GOAL KICKS the defense must retreat to the half field line (or build out line) until the ball is kicked. Goal kick from the corner of the goal box.',
                'Switch sides at half time',
                'No off-sides',
                'Referees will be young kids - be kind!',
                'Focus on dribbling, some passing, and a diamond shape.',
                'No player may be in the goal box unless they are going after the ball (no goalie)',
                'Defenders should move between the goal box and the midfield line depending on where the ball is on the field (They should not be standing in the back field waiting)',
                '4 10 minute quarters',
                'Roster max is 8',
                'No player cards or rosters needed at this age',
                'No jewelry, no metal headbands, barrettes, bobby pins, clips in the hair'
            ]
        },
        {
            name: 'Cancellations',
            text: 'Home team is responsible for deciding if games are cancelled due to weather. The home team should be reaching out to the visiting team as soon as possible to reschedule or cancel'
        },
        {
            name: 'Sidelines',
            text: 'All players and coaches on one side of the field, all spectators on the other side of the field'
        },
        {
            name: 'Half-time Decision',
            text: 'If one team is clearly domninating the other team, coaches and referee will have a meeting at half time. The weaker team may add one extra player to the field after a meeting has occurred'
        },
        {
            name: 'Game Day Addresses',
            details: [
                "Colfax: West Broadway (Across from Casey's)",
                'Carlisle: 5615 SE 72nd Ave (by Avon)',
                'Bondurant: 315 2nd Street NW (Behind American Legion Hall)',
                'Pleasant Hill: Upper Doanes Park (up the hill from the Youth Center)',
                'Newton: Agnes-Patterson Park'
            ],
            link: {
                text: 'Bondurant West Complex',
                url: RouteNames.Locations
            }
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
                'Practices take place at the Bondurant Soccer Complex as scheduled by Coach',
                'Home games take place at the Bondurant Soccer West Complex',
                'Up to 4 games may result in travel around central iowa'
            ],
            link: {
                text: 'Bondurant West Complex',
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
                'Practices take place at the Bondurant Soccer Complex as scheduled by Coach',
                'Home games take place at the Bondurant Soccer East Complex',
                'Up to 4 games may result in travel around central iowa'
            ],
            link: {
                text: 'Bondurant East Complex',
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
                'Home games take place at the Bondurant Soccer East Complex',
                'Up to 4 games may result in travel around central iowa'
            ],
            link: {
                text: 'Bondurant East Complex',
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
                'Practices take place at the Bondurant Soccer Complex as scheduled by Coach',
                'Home games take place at the Bondurant Soccer East Complex',
                'Up to 4 games may result in travel around central iowa'
            ],
            link: {
                text: 'Bondurant East Complex',
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
                'Practices take place at the Bondurant Soccer Complex as scheduled by Coach',
                'Home games take place at the Bondurant Soccer East Complex',
                'Up to 4 games may result in travel around central iowa'
            ],
            link: {
                text: 'Bondurant East Complex',
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
    title: 'Short-Sided (U13 - U19',
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
                'Practices take place at the Bondurant Soccer Complex as scheduled by Coach',
                'Home games take place at the Bondurant Soccer East Complex',
                'Up to 4 games may result in travel around central iowa'
            ],
            link: {
                text: 'Bondurant East Complex',
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
