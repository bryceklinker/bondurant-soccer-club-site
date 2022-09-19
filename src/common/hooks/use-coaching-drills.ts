import {useMemo} from 'react';
import {COACHING_DRILLS} from '../state/coaching-drills';

export function useCoachingDrills() {
    return useMemo(() => COACHING_DRILLS, []);
}
