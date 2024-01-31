import { useMemo } from 'react';
import { COACHING_DRILLS, VOLUNTEER_OPTIONS } from './state';
import { graphql, useStaticQuery } from 'gatsby';
import {
    FileNode,
    StaticQueryResult
} from '../../common/hooks/use-files-query';

export function useVolunteerOptions() {
    return useMemo(() => VOLUNTEER_OPTIONS, []);
}

export function useCoachingDrills() {
    return useMemo(() => COACHING_DRILLS, []);
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
