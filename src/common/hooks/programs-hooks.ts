import { useMemo } from 'react';
import { PROGRAMS } from '../state/programs';

export function usePrograms() {
    return useMemo(() => PROGRAMS, []);
}
