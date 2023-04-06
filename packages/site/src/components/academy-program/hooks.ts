import { useMemo } from 'react';
import {
    ACADEMY_ADDITIONAL_REQUIREMENTS,
    ACADEMY_DIRECTORS,
    ACADEMY_EQUIPMENT_ITEMS,
    ACADEMY_GOALS,
    ACADEMY_LEAGUE_FORMAT,
    ACADEMY_PLAYER_CHARACTERISTICS,
    ACADEMY_TEAM_FORMATION,
    ACADEMY_UNIFORM_ITEMS
} from './state';
import { useBoardMembersInRole } from '../../common/hooks/board-members-hooks';
import { BoardMemberRole } from '../../common/state/board-member-role';

export function useAcademyProgramGoals() {
    return useMemo(() => ACADEMY_GOALS, []);
}

export function useAcademyPlayerCharacteristics() {
    return useMemo(() => ACADEMY_PLAYER_CHARACTERISTICS, []);
}

export function useAcademyTeamFormationRules() {
    return useMemo(() => ACADEMY_TEAM_FORMATION, []);
}

export function useAcademyLeagueFormatRules() {
    return useMemo(() => ACADEMY_LEAGUE_FORMAT, []);
}

export function useAcademyAdditionalRequirements() {
    return useMemo(() => ACADEMY_ADDITIONAL_REQUIREMENTS, []);
}

export function useAcademyUniformItems() {
    return useMemo(() => ACADEMY_UNIFORM_ITEMS, []);
}

export function useAcademyEquipmentItems() {
    return useMemo(() => ACADEMY_EQUIPMENT_ITEMS, []);
}

export function useAcademyContacts() {
    const academyOperations = useBoardMembersInRole(
        BoardMemberRole.DirectorOfAcademyOperations
    );
    return useMemo(
        () => [...ACADEMY_DIRECTORS, ...academyOperations],
        [academyOperations]
    );
}
