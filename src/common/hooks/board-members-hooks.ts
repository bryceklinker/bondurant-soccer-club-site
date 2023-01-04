import { useMemo } from 'react';
import { BOARD_MEMBERS } from '../state/board-members';
import { BoardMemberData, BoardMemberRole, LinkData } from '../state/models';

export function useBoardMembers() {
    return useMemo(() => BOARD_MEMBERS, []);
}

export function useBoardMembersEmailLink(): LinkData {
    const boardMembers = useBoardMembers();
    return useMemo(
        () => ({
            text: 'Board Members',
            url: BoardMemberData.getMailtoEmails(boardMembers)
        }),
        [boardMembers]
    );
}

export function useBoardMembersInRole(
    role: BoardMemberRole
): Array<BoardMemberData> {
    const boardMembers = useBoardMembers();
    return useMemo(
        () => boardMembers.filter(b => b.role === role),
        [role, boardMembers]
    );
}

export function useBoardMemberEmailsInRole(role: BoardMemberRole) {
    const boardMembers = useBoardMembersInRole(role);
    return useMemo(
        () => BoardMemberData.getMailtoEmails(boardMembers),
        [role, boardMembers]
    );
}
