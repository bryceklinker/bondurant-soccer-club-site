import {useMemo} from 'react';
import {BoardMemberData, DIRECTORS_OF_EQUIPMENT, LinkData, UNIFORM_PURCHASE_OPTIONS, UNIFORM_SIZES} from '../state';

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
        }
    }, [])
}
