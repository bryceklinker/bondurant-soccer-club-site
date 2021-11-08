import {BoardMemberData, BoardMemberRole, BoardMemberRoleGroup} from './models';

export const BOARD_MEMBERS: Array<BoardMemberData> = [
    {
        roleTitle: 'President',
        role: BoardMemberRole.President,
        name: 'Brandon Cook',
        email: 'bonsoccerprez@gmail.com',
        roleGroup: BoardMemberRoleGroup.Elected
    },
    {
        roleTitle: 'Vice President',
        role: BoardMemberRole.VicePresident,
        name: 'N/A',
        email: '',
        roleGroup: BoardMemberRoleGroup.Elected
    },
    {
        roleTitle: 'Treasurer',
        role: BoardMemberRole.Treasurer,
        name: 'Bryce Klinker',
        email: 'bonsoccertreasurer@gmail.com',
        roleGroup: BoardMemberRoleGroup.Elected
    },
    {
        roleTitle: 'Secretary',
        role: BoardMemberRole.Secretary,
        name: 'Michelle Berger',
        email: 'mmatitaly@hotmail.com',
        roleGroup: BoardMemberRoleGroup.Elected
    },
    {
        roleTitle: 'Registrar',
        role: BoardMemberRole.Registrar,
        name: 'Rebecca Sly',
        email: 'bonsoccerregistrar@gmail.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of Referees',
        role: BoardMemberRole.DirectorOfReferees,
        name: 'Mark Feld',
        email: 'mark.feld7@gmail.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of East Fields',
        role: BoardMemberRole.DirectorOfFields,
        name: 'Jason Greubel',
        email: 'jasonericca@gmail.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of West Fields',
        role: BoardMemberRole.DirectorOfFields,
        name: 'Tom Trammell',
        email: 'tssafety@tssafetyinc.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of Communications',
        role: BoardMemberRole.DirectorOfCommunications,
        name: 'Nicole Van Houten',
        email: 'nicole.vanhouten@gmail.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of Concessions',
        role: BoardMemberRole.DirectorOfConcessions,
        name: 'Sunny Huisman',
        email: 'bonsoccerconcessions@gmail.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of U5/U6',
        role: BoardMemberRole.DirectorOfCoaches,
        name: 'Andrea Haselhoff',
        email: 'u6soccer@yahoo.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of Coaches (U9+)',
        role: BoardMemberRole.DirectorOfCoaches,
        name: 'Nick Quinlan',
        email: 'nickolas.quinlan@dsmschooles.org',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of Coaches (U7-U8)',
        role: BoardMemberRole.DirectorOfCoaches,
        name: 'Cole LaZella',
        email: 'callezal@yahoo.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of Uniforms',
        role: BoardMemberRole.DirectorOfEquipment,
        name: 'Rania Robb',
        email: 'raniarobbsoccer@outlook.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'At-Large',
        role: BoardMemberRole.AtLarge,
        name: 'Chan Cavan',
        email: 'madden515@yahoo.com',
        roleGroup: BoardMemberRoleGroup.AtLarge
    },
    {
        roleTitle: 'At-Large',
        role: BoardMemberRole.AtLarge,
        name: 'Matt Chambers',
        email: 'matthew_d_chambers@hotmail.com',
        roleGroup: BoardMemberRoleGroup.AtLarge
    },
    {
        roleTitle: 'At-Large',
        role: BoardMemberRole.AtLarge,
        name: 'David Gossard',
        email: 'david.j.gossard@live.com',
        roleGroup: BoardMemberRoleGroup.AtLarge
    },
    {
        roleTitle: 'At-Large',
        role: BoardMemberRole.AtLarge,
        name: 'Alan Knuth',
        email: 'knuthconstruction@hotmail.com',
        roleGroup: BoardMemberRoleGroup.AtLarge
    },
    {
        roleTitle: 'At-Large',
        role: BoardMemberRole.AtLarge,
        name: 'John Waldrop',
        email: 'john.waldrop@jci.com',
        roleGroup: BoardMemberRoleGroup.AtLarge
    }
]

export const DIRECTORS_OF_COACHES = BOARD_MEMBERS.filter(b => b.role === BoardMemberRole.DirectorOfCoaches);
export const DIRECTORS_OF_FIELDS = BOARD_MEMBERS.filter(b => b.role === BoardMemberRole.DirectorOfFields);
export const DIRECTORS_OF_REFEREES = BOARD_MEMBERS.filter(b => b.role === BoardMemberRole.DirectorOfReferees);
export const DIRECTORS_OF_CONCESSIONS = BOARD_MEMBERS.filter(b => b.role === BoardMemberRole.DirectorOfConcessions);
export const PRESIDENTS = BOARD_MEMBERS.filter(b => b.role === BoardMemberRole.President);
