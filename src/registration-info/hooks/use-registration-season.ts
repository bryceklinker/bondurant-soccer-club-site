import {useMemo} from 'react';
import {getRegistrationSeason, RegistrationSeasonData} from '../state';

export function useRegistrationSeason() {
    return useMemo<RegistrationSeasonData>(getRegistrationSeason, []);
}
