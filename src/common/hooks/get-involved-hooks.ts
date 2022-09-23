import { useMemo } from 'react';
import { COACHING_DRILLS } from '../state/get-involved';
import { GET_INVOLVED_OPTIONS } from '../state/get-involved-options';

export function useGetInvolvedOptions() {
    return useMemo(() => GET_INVOLVED_OPTIONS, []);
}

export function useCoachingDrills() {
    return useMemo(() => COACHING_DRILLS, []);
}
