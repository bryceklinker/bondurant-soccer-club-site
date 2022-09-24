import { useMemo } from 'react';
import { useWestComplexLocation } from './locations-hooks';
import {
    CONCESSION_SIGNUP_LINK,
    DIRECTOR_OF_CONCESSIONS_LINK
} from '../state/concessions';

export function useConcessionSignupLink() {
    return useMemo(() => CONCESSION_SIGNUP_LINK, []);
}

export function useDirectorOfConcessionsMailLink() {
    return useMemo(() => DIRECTOR_OF_CONCESSIONS_LINK, []);
}

export function useConcessionsLocation() {
    return useWestComplexLocation();
}
