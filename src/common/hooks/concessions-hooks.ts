import { useMemo } from 'react';
import {
    CONCESSION_HOURS_IMAGE,
    CONCESSION_SIGNUP_LINK,
    DIRECTOR_OF_CONCESSIONS_LINK
} from '../state';
import { useWestComplexLocation } from './locations-hooks';

export function useConcessionSignupLink() {
    return useMemo(() => CONCESSION_SIGNUP_LINK, []);
}

export function useDirectorOfConcessionsMailLink() {
    return useMemo(() => DIRECTOR_OF_CONCESSIONS_LINK, []);
}

export function useConcessionsLocation() {
    return useWestComplexLocation();
}

export function useConcessionHoursImage() {
    return useMemo(() => CONCESSION_HOURS_IMAGE, []);
}
