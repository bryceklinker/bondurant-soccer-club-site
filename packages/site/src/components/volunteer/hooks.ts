import { useMemo } from 'react';
import {
    BOARD_MEMBER_POSITION_LINKS,
    COACHING_DRILLS,
    DIRECTOR_OF_ACADEMY_LINKS,
    FULL_SEASON_VOLUNTEER_LINKS, SINGLE_TIME_VOLUNTEER_LINKS
} from './state';
import { graphql, useStaticQuery } from 'gatsby';
import {
    FileNode,
    StaticQueryResult
} from '../../common/hooks/use-files-query';

export function useCoachingDrills() {
    return useMemo(() => COACHING_DRILLS, []);
}

export function useDirectorOfAcademyLinks() {
    return useMemo(() => DIRECTOR_OF_ACADEMY_LINKS, []);
}

export function useFullSeasonVolunteerLinks() {
    return useMemo(() => FULL_SEASON_VOLUNTEER_LINKS, []);
}

export function useBoardMemberPositionLinks() {
    return useMemo(() => BOARD_MEMBER_POSITION_LINKS, []);
}

export function useSingleTimeVolunteerLinks() {
    return useMemo(() => SINGLE_TIME_VOLUNTEER_LINKS, []);
}

export function useSessionPlans() {
    const query = graphql`
        query SessionPlansQuery {
            allFile(
                filter: {
                    relativeDirectory: { eq: "session-plans" }
                    extension: { eq: "pdf" }
                }
            ) {
                edges {
                    node {
                        id
                        publicURL
                        name
                    }
                }
            }
        }
    `;

    const data = useStaticQuery<StaticQueryResult>(query);
    const nodes = data?.allFile?.edges?.map(e => e.node) ?? [];
    return nodes.filter(n => Boolean(n)) as FileNode[];
}
