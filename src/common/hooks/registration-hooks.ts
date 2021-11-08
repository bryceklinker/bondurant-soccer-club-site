import {useMemo} from 'react';
import {RegistrationSeasonData, Registration, RegistrationDatesData} from '../state';

export function useRegistrationSeason() {
    return useMemo<RegistrationSeasonData>(Registration.getRegistrationSeason, []);
}

export function useRegistrationDates(): Array<RegistrationDatesData> {
    return useMemo(Registration.getRegistrationDates, []);
}

