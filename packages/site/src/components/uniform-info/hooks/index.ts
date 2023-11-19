import { useMemo } from 'react';
import { UNIFORM_PURCHASE_OPTIONS, UNIFORM_SIZES } from '../state';
import { LinkData } from '../../../common/state/link-data';
import { BoardMemberData } from '../../../common/state/board-member-data';
import { DIRECTORS_OF_EQUIPMENT } from '../../../common/state/board-members';

export * from './use-size-chart-download-file';
export * from './use-recreation-uniform-images';

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
export {useAcademyUniformImages} from './use-academy-uniform-images';
