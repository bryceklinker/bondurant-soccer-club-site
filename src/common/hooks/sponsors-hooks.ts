import { useMemo } from 'react';
import { SPONSOR_LINKS } from '../state';

export function useSponsorshipLinks() {
    return useMemo(() => SPONSOR_LINKS, []);
}
