import { useMemo } from 'react';
import {
    ACADEMY_GOALS,
    ACADEMY_PLAYER_CHARACTERISTICS
} from '../state/academy-program';

export function useAcademyProgramGoals() {
    return useMemo(() => ACADEMY_GOALS, []);
}

export function useAcademyPlayerCharacteristics() {
    return useMemo(() => ACADEMY_PLAYER_CHARACTERISTICS, []);
}
