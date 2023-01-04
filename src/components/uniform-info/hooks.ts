import { BoardMemberData, LinkData } from '../../common/state/models';
import { useMemo } from 'react';
import { DIRECTORS_OF_EQUIPMENT } from '../../common/state/board-members';
import { UNIFORM_PURCHASE_OPTIONS, UNIFORM_SIZES } from './state';

export function useUniformSizes() {
    return useMemo(() => UNIFORM_SIZES, []);
}

export function useUniformPurchaseOptions() {
    return useMemo(() => UNIFORM_PURCHASE_OPTIONS, []);
}

export function useDirectorOfUniformsLink(): LinkData {
    return useMemo(() => {
        const emails = BoardMemberData.getMailToLink(DIRECTORS_OF_EQUIPMENT);
        return {
            url: emails,
            text: 'Director of Uniforms'
        };
    }, []);
}
