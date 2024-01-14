import { useMemo } from 'react';
import {
    DIRECTOR_OF_REFEREES_CONTACT_LINK,
    REFEREE_LINKS
} from '../state/referee-links';

export function refereeHooks() {
    return useMemo(() => REFEREE_LINKS, []);
}

export function useDirectorOfRefereesContact() {
    return useMemo(() => DIRECTOR_OF_REFEREES_CONTACT_LINK, []);
}
