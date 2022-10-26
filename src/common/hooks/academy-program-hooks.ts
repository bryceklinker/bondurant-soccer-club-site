import { useMemo } from 'react';
import { ACADEMY_GOALS } from '../state/academy-goals';

export function useAcademyProgramGoals() {
    return useMemo(() => ACADEMY_GOALS, []);
}
