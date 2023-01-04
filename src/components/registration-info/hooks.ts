import { useMemo } from 'react';
import {
    REGISTER_HERE_LINK,
    Registration,
    REGISTRATION_DATES,
    REGISTRATION_SOFTWARE
} from './state';
import { RegistrationSeasonData } from '../../common/state/registration-season-data';
import { RegistrationDatesData } from '../../common/state/registration-dates-data';

export function useCurrentSeason() {
    return useMemo(Registration.currentSeason, []);
}

export function useCurrentRegistrationSeason() {
    return useMemo<RegistrationSeasonData>(
        Registration.currentRegistrationSeason,
        []
    );
}

export function useRegistrationDates(): Array<RegistrationDatesData> {
    return useMemo(() => REGISTRATION_DATES, []);
}

export function useMinRegistrationBirthYear() {
    const { ages } = useCurrentRegistrationSeason();
    return useMemo(() => Math.min(...ages.map(a => a.minBirthYear)), [ages]);
}

export function useMaxRegistrationBirthYear() {
    const { ages } = useCurrentRegistrationSeason();
    return useMemo(() => Math.max(...ages.map(a => a.maxBirthYear)), [ages]);
}

export function useRegistrationLink() {
    return useMemo(() => REGISTER_HERE_LINK, []);
}

export function useRegistrationSoftware() {
    return useMemo(() => REGISTRATION_SOFTWARE, []);
}
