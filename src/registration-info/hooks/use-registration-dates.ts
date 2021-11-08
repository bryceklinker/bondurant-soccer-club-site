import {useMemo} from 'react';
import {getRegistrationDates, RegistrationDatesData} from '../state';

export function useRegistrationDates(): Array<RegistrationDatesData> {
    return useMemo(getRegistrationDates, []);
}
