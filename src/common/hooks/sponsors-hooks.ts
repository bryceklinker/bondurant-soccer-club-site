import { useMemo } from 'react';
import { SPONSOR_LINKS } from '../state/sponsors';

export function useSponsorshipLinks() {
    return useMemo(() => SPONSOR_LINKS, []);
}
