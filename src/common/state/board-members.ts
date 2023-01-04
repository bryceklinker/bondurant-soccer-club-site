import { RouteNames } from '../routing/route-names';
import { BoardMemberRoleGroup } from './board-member-role-group';
import { BoardMemberRole } from './board-member-role';
import { BoardMemberData } from './board-member-data';

export const BOARD_MEMBERS: Array<BoardMemberData> = [
    {
        roleTitle: 'President',
        role: BoardMemberRole.President,
        name: 'Brandon Cook',
        email: 'president@bondurantsoccerclub.com',
        roleGroup: BoardMemberRoleGroup.Official
    },
    {
        roleTitle: 'Vice President',
        role: BoardMemberRole.VicePresident,
        name: 'N/A',
        email: '',
        roleGroup: BoardMemberRoleGroup.Official
    },
    {
        roleTitle: 'Treasurer',
        role: BoardMemberRole.Treasurer,
        name: 'Nicholas Stanley',
        email: 'treasurer@bondurantsoccerclub.com',
        roleGroup: BoardMemberRoleGroup.Official
    },
    {
        roleTitle: 'Secretary',
        role: BoardMemberRole.Secretary,
        name: 'N/A',
        email: '',
        roleGroup: BoardMemberRoleGroup.Official
    },
    {
        roleTitle: 'Registrar',
        role: BoardMemberRole.Registrar,
        name: 'Rebecca Sly',
        email: 'registrar@bondurantsoccerclub.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of Referees',
        role: BoardMemberRole.DirectorOfReferees,
        name: 'Mark Feld',
        email: 'director-referees@bondurantsoccerclub.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of East Fields',
        role: BoardMemberRole.DirectorOfFields,
        name: 'Jason Greubel',
        email: 'director-east-fields@bondurantsoccerclub.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of West Fields',
        role: BoardMemberRole.DirectorOfFields,
        name: 'Tom Trammell',
        email: 'director-west-fields@bondurantsoccerclub.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of Communications',
        role: BoardMemberRole.DirectorOfCommunications,
        name: 'Nicole Van Houten',
        email: 'director-communications@bondurantsoccerclub.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of Concessions',
        role: BoardMemberRole.DirectorOfConcessions,
        name: 'Sunny Huisman',
        email: 'director-concessions@bondurantsoccerclub.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of U5/U6',
        role: BoardMemberRole.DirectorOfU5U6,
        name: 'Andrea Haselhoff',
        email: 'director-u5.6@bondurantsoccerclub.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of Coaches (U9+)',
        role: BoardMemberRole.DirectorOfCoaches,
        name: 'Nick Quinlan',
        email: 'director-coaches-u9-up@bondurantsoccerclub.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of Coaches (U7-U8)',
        role: BoardMemberRole.DirectorOfCoaches,
        name: 'Cole LaZella',
        email: 'director-coaches-u7.8@bondurantsoccerclub.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of Uniforms',
        role: BoardMemberRole.DirectorOfEquipment,
        name: 'Rania Robb',
        email: 'director-uniforms@bondurantsoccerclub.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of Academy Operations',
        role: BoardMemberRole.DirectorOfAcademyOperations,
        name: 'Jamie Cornelius',
        email: 'director-academy-operations@bondurantsoccerclub.com',
        roleGroup: BoardMemberRoleGroup.Directors
    },
    {
        roleTitle: 'Director of Academy',
        role: BoardMemberRole.DirectorOfAcademy,
        name: 'TBD',
        email: 'director-academy@bondurantsoccerclub.com',
        roleGroup: BoardMemberRoleGroup.Directors,
        jobDescriptionRoute: RouteNames.DirectorOfAcademyJobDescription
    },
    {
        roleTitle: 'At-Large',
        role: BoardMemberRole.AtLarge,
        name: 'Chan Cavan',
        email: 'at-large-chan@bondurantsoccerclub.com',
        roleGroup: BoardMemberRoleGroup.AtLarge
    }
];

export const DIRECTORS_OF_COACHES = BOARD_MEMBERS.filter(
    b => b.role === BoardMemberRole.DirectorOfCoaches
);
export const DIRECTORS_OF_FIELDS = BOARD_MEMBERS.filter(
    b => b.role === BoardMemberRole.DirectorOfFields
);
export const DIRECTORS_OF_REFEREES = BOARD_MEMBERS.filter(
    b => b.role === BoardMemberRole.DirectorOfReferees
);
export const DIRECTORS_OF_CONCESSIONS = BOARD_MEMBERS.filter(
    b => b.role === BoardMemberRole.DirectorOfConcessions
);
export const DIRECTORS_OF_EQUIPMENT = BOARD_MEMBERS.filter(
    b => b.role === BoardMemberRole.DirectorOfEquipment
);
export const DIRECTORS_OF_U5_U6 = BOARD_MEMBERS.filter(
    b => b.role === BoardMemberRole.DirectorOfU5U6
);
export const REGISTRARS = BOARD_MEMBERS.filter(
    b => b.role === BoardMemberRole.Registrar
);
export const PRESIDENTS = BOARD_MEMBERS.filter(
    b => b.role === BoardMemberRole.President
);
