import { useMemo } from 'react';
import { COACHING_DRILLS, GET_INVOLVED_OPTIONS } from './state';

export function useGetInvolvedOptions() {
    return useMemo(() => GET_INVOLVED_OPTIONS, []);
}

export function useCoachingDrills() {
    return useMemo(() => COACHING_DRILLS, []);
}
