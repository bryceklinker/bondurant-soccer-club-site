import { useMemo } from 'react';
import {
    COACH_FREQUENTLY_ASKED_QUESTIONS,
    FREQUENTLY_ASKED_QUESTIONS,
    REGISTRATION_FREQUENTLY_ASKED_QUESTIONS
} from './state';

export function useFrequentlyAskedQuestions() {
    return useMemo(() => FREQUENTLY_ASKED_QUESTIONS, []);
}

export function useRegistrationFrequentlyAskedQuestions() {
    return useMemo(() => REGISTRATION_FREQUENTLY_ASKED_QUESTIONS, []);
}

export function useCoachFrequentlyAskedQuestions() {
    return useMemo(() => COACH_FREQUENTLY_ASKED_QUESTIONS, []);
}
