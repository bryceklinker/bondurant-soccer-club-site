import { useMemo } from 'react';
import {
    COACHING_CODE_OF_CONDUCT_EXPECTATIONS,
    CODE_OF_CONDUCT_PUNISHMENTS,
    PARENT_CODE_OF_CONDUCT_EXPECTATIONS,
    PLAYER_CODE_OF_CONDUCT,
    REPORT_HANDLING_STEPS
} from '../state';

export function useCodeOfConductPunishments() {
    return useMemo(() => CODE_OF_CONDUCT_PUNISHMENTS, []);
}

export function useCodeOfConductReportHandlingSteps() {
    return useMemo(() => REPORT_HANDLING_STEPS, []);
}

export function useParentCodeOfConductExpectations() {
    return useMemo(() => PARENT_CODE_OF_CONDUCT_EXPECTATIONS, []);
}

export function usePlayerCodeOfConductExpectations() {
    return useMemo(() => PLAYER_CODE_OF_CONDUCT, []);
}

export function useCoachingCodeOfConductExpectations() {
    return useMemo(() => COACHING_CODE_OF_CONDUCT_EXPECTATIONS, []);
}
