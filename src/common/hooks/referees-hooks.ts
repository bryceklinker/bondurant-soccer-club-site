import {useMemo} from 'react';
import {
    DIRECTOR_OF_REFEREES_CONTACT_LINK, REFEREE_RECERTIFICATION_COST,
    REFEREE_RECERTIFICATION_STEPS,
    REFEREE_REQUIRED_TRAINING_LINK
} from '../state';

export function useDirectorOfRefereesContact() {
    return useMemo(() => DIRECTOR_OF_REFEREES_CONTACT_LINK, []);
}

export function useRefereeRecertificationSteps() {
    return useMemo(() => REFEREE_RECERTIFICATION_STEPS, []);
}

export function useRefereeRequiredTrainingLink() {
    return useMemo(() => REFEREE_REQUIRED_TRAINING_LINK, []);
}

export function useRefereeRecertificationCost() {
    return useMemo(() => REFEREE_RECERTIFICATION_COST, []);
}
