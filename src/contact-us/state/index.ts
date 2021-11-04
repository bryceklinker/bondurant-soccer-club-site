export enum BoardMemberRoleGroup {
    Elected = 'Elected Officials',
    Directors = 'Directors',
    AtLarge = 'At Large Members'
}

export interface BoardMemberData {
    role: string;
    name: string;
    email: string;
    roleGroup: BoardMemberRoleGroup;
}

export const BOARD_MEMBERS: Array<BoardMemberData> = [
    {
        role: 'President',
        name: 'Brandon Cook',
        email: 'bonsoccerprez@gmail.com',
        roleGroup: BoardMemberRoleGroup.Elected
    },
    {
        role: 'Treasurer',
        name: 'Bryce Klinker',
        email: 'bonsoccertreasurer@gmail.com',
        roleGroup: BoardMemberRoleGroup.Elected
    },
    {
        role: 'Secretary',
        name: 'Michelle Berger',
        email: 'mmatitaly@hotmail.com',
        roleGroup: BoardMemberRoleGroup.Elected
    },
    {
        role: 'Registrar',
        name: 'Rebecca Sly',
        email: 'bonsoccerregistrar@gmail.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        role: 'Director of Referees',
        name: 'Mark Feld',
        email: 'mark.feld7@gmail.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        role: 'Director of East Fields',
        name: 'Jason Greubel',
        email: 'jasonericca@gmail.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        role: 'Director of West Fields',
        name: 'Tom Trammell',
        email: 'tssafety@tssafetyinc.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        role: 'Director of U5/U6',
        name: 'Andrea Haselhoff',
        email: 'u6soccer@yahoo.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        role: 'Director of Communications',
        name: 'Nicole Van Houten',
        email: 'nicole.vanhouten@gmail.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        role: 'Director of Concessions',
        name: 'Sunny Huisman',
        email: 'bonsoccerconcessions@gmail.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        role: 'Director of Coaches (U9+)',
        name: 'Nick Quinlan',
        email: 'nickolas.quinlan@dsmschooles.org',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        role: 'Director of Coaches (U7-U8)',
        name: 'Cole LaZella',
        email: 'callezal@yahoo.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        role: 'Director of Uniforms',
        name: 'Rania Robb',
        email: 'raniarobbsoccer@outlook.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        role: 'At-Large',
        name: 'Chan Cavan',
        email: 'madden515@yahoo.com',
        roleGroup: BoardMemberRoleGroup.AtLarge
    },
    {
        role: 'At-Large',
        name: 'Matt Chambers',
        email: 'matthew_d_chambers@hotmail.com',
        roleGroup: BoardMemberRoleGroup.AtLarge
    },
    {
        role: 'At-Large',
        name: 'David Gossard',
        email: 'david.j.gossard@live.com',
        roleGroup: BoardMemberRoleGroup.AtLarge
    },
    {
        role: 'At-Large',
        name: 'Alan Knuth',
        email: 'knuthconstruction@hotmail.com',
        roleGroup: BoardMemberRoleGroup.AtLarge
    },
    {
        role: 'At-Large',
        name: 'John Waldrop',
        email: 'john.waldrop@jci.com',
        roleGroup: BoardMemberRoleGroup.AtLarge
    }
]
