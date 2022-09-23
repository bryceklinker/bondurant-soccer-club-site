import { useMemo } from 'react';
import { BOARD_MEMBERS } from '../state/board-members';
import { BoardMemberData, LinkData } from '../state/models';

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
