import { useMemo } from 'react';
import { LOCATIONS, WEST_COMPLEX_LOCATION } from '../state';

export function useLocations() {
    return useMemo(() => LOCATIONS, []);
}

export function useWestComplexLocation() {
    return useMemo(() => WEST_COMPLEX_LOCATION, []);
}
