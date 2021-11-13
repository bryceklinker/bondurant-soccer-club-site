import {useMemo} from 'react';
import {PROGRAMS} from '../state';

export function usePrograms() {
    return useMemo(() => PROGRAMS, []);
}
