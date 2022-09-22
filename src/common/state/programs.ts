import { ProgramInfo } from './models';
import { AGE_GROUPS } from './age-groups';
import { RouteNames } from '../routing';

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
            details: [
                'Practices take place at the Bondurant Soccer West Complex as scheduled by Coach',
                'Home games take place at the Bondurant Soccer West Complex',
                'Up to 4 games may result in travel to Polk City or Pleasant Hill'
            ],
            link: {
                text: 'Bondurant West Complex',
                url: RouteNames.Locations
            }
        },
        { name: 'Number of Games', text: '7-8' },
        {
            name: 'Game Days/Times',
            details: [
                'Girls Saturdays 9:00 AM - 1:00 PM',
                'Coed Sundays 1:00 PM - 6:00 PM'
            ]
        },
        { name: 'Game Length', text: '4 - 10 minute quarters' },
        { name: 'Maximum Player Roster', text: '6' },
        { name: 'Game Play', text: '4 v 4' },
        { name: 'Ball Size', text: '3' },
        { name: 'Goalkeeper', text: 'No' },
        { name: 'Referee', text: 'Certified Center Referee' }
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
