import { useMemo } from 'react';
import { UNIFORM_PURCHASE_OPTIONS, UNIFORM_SIZES } from '../state/uniforms';
import { BoardMemberData, LinkData } from '../state/models';
import { DIRECTORS_OF_EQUIPMENT } from '../state/board-members';

export function useUniformSizes() {
    return useMemo(() => UNIFORM_SIZES, []);
}

export function useUniformPurchaseOptions() {
    return useMemo(() => UNIFORM_PURCHASE_OPTIONS, []);
}

export function useDirectorOfUniformsLink(): LinkData {
    return useMemo(() => {
        const emails = BoardMemberData.getMailtoEmails(DIRECTORS_OF_EQUIPMENT);
        return {
            url: `mailto:${emails}`,
            text: 'Director of Uniforms'
        };
    }, []);
}
