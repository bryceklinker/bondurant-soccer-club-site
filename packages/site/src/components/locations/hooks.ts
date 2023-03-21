import { useMemo } from 'react';
import { LOCATIONS, COLLISON_SOCCER_PARK_LOCATION } from './state';

export function useLocations() {
    return useMemo(() => LOCATIONS, []);
}

export function useWestComplexLocation() {
    return useMemo(() => COLLISON_SOCCER_PARK_LOCATION, []);
}
