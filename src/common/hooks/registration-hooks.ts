import {useMemo} from 'react';
import {RegistrationSeasonData, Registration, RegistrationDatesData} from '../state';

export function useCurrentSeason() {
    return useMemo(Registration.getSeason, []);
}

export function useRegistrationSeason() {
    return useMemo<RegistrationSeasonData>(Registration.getRegistrationSeason, []);
}

export function useRegistrationDates(): Array<RegistrationDatesData> {
    return useMemo(Registration.getRegistrationDates, []);
}

export function useMinRegistrationBirthYear() {
    const {ages} = useRegistrationSeason();
    return useMemo(() => Math.min(...ages.map(a => a.minBirthYear)), [ages]);
}

export function useMaxRegistrationBirthYear() {
    const {ages} = useRegistrationSeason();
    return useMemo(() => Math.max(...ages.map(a => a.maxBirthYear)), [ages]);
}

