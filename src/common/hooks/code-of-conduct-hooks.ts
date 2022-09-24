import { useMemo } from 'react';
import {
    CODE_OF_CONDUCT_PUNISHMENTS,
    REPORT_HANDLING_STEPS
} from '../state/code-of-conduct-common';
import { PARENT_CODE_OF_CONDUCT_EXPECTATIONS } from '../state/parent-code-of-conduct';
import { PLAYER_CODE_OF_CONDUCT } from '../state/player-code-of-conduct';
import { COACHING_CODE_OF_CONDUCT_EXPECTATIONS } from '../state/coaching-code-of-conduct';

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
