import { useMemo } from 'react';
import { BOARD_MEMBERS, BoardMemberData, LinkData } from '../state';

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
