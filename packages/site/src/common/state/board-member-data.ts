import { BoardMemberRole } from './board-member-role';
import { BoardMemberRoleGroup } from './board-member-role-group';

export interface BoardMemberData {
    roleTitle: string;
    role: BoardMemberRole;
    name: string;
    email: string;
    roleGroup: BoardMemberRoleGroup;
    jobDescriptionRoute?: string;
}

export const BoardMemberData = {
    getEmails: (members: Array<BoardMemberData>): Array<string> => {
        return members.map(m => m.email).filter(e => e && e !== '');
    },
    getMailToLink: (members: Array<BoardMemberData>): string => {
        const emails = BoardMemberData.getEmails(members).join(',');
        return `mailto:${emails}`;
    }
};
