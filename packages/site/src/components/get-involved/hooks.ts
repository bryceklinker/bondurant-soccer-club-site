import { useMemo } from 'react';
import { COACHING_DRILLS, GET_INVOLVED_OPTIONS } from './state';
import {graphql, useStaticQuery} from 'gatsby';

export function useGetInvolvedOptions() {
    return useMemo(() => GET_INVOLVED_OPTIONS, []);
}

export function useCoachingDrills() {
    return useMemo(() => COACHING_DRILLS, []);
}

export type SessionPlanFile = {
    id: string;
    name: string;
    publicURL: string;
};

export function useSessionPlans() {
    const data = useStaticQuery<{
        allFile: {
            edges: [{
                node: SessionPlanFile
            }]
        }
    }>(graphql`
        query SessionPlansQuery {
            allFile(
                filter: {
                    relativeDirectory: { eq: "session-plans" },
                    extension: {eq: "pdf"} 
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
    `);

    return data.allFile.edges.map(e => e.node);
}
