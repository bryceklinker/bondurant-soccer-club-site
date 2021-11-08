import {useMemo} from 'react';
import {BOARD_MEMBERS} from '../state';

export function useBoardMembers() {
    return useMemo(() => BOARD_MEMBERS, []);
}


