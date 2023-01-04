import { useMemo } from 'react';
import { DOWNLOADABLE_DOCUMENT_LINKS, MEETING_MINUTES_LINK } from './state';
import { BY_LAWS } from './by-laws-state';
import {
    COACHING_CODE_OF_CONDUCT_EXPECTATIONS,
    CODE_OF_CONDUCT_PUNISHMENTS,
    PARENT_CODE_OF_CONDUCT_EXPECTATIONS,
    PLAYER_CODE_OF_CONDUCT,
    REPORT_HANDLING_STEPS
} from './code-of-conduct-state';

export function useDownloadableDocuments() {
    return useMemo(() => DOWNLOADABLE_DOCUMENT_LINKS, []);
}

export function useByLaws() {
    return useMemo(() => BY_LAWS, []);
}

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

export function useMeetingMinutesLink() {
    return useMemo(() => MEETING_MINUTES_LINK, []);
}
