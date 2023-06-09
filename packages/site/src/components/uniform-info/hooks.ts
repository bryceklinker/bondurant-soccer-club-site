import { useMemo } from 'react';
import { DIRECTORS_OF_EQUIPMENT } from '../../common/state/board-members';
import { UNIFORM_PURCHASE_OPTIONS, UNIFORM_SIZES } from './state';
import { LinkData } from '../../common/state/link-data';
import { BoardMemberData } from '../../common/state/board-member-data';
import { graphql, useStaticQuery } from 'gatsby';
import { SessionPlanFile } from '../get-involved/hooks';

export function useUniformSizes() {
    return useMemo(() => UNIFORM_SIZES, []);
}

export function useUniformPurchaseOptions() {
    return useMemo(() => UNIFORM_PURCHASE_OPTIONS, []);
}

export function useDirectorOfUniformsLink(): LinkData {
    return useMemo(() => {
        const emails = BoardMemberData.getMailToLink(DIRECTORS_OF_EQUIPMENT);
        return {
            url: emails,
            text: 'Director of Uniforms'
        };
    }, []);
}

export type SizeChartFile = {
    id: string;
    name: string;
    publicURL: string;
};

export function useSizeChartDownload() {
    const data = useStaticQuery<{
        allFile?: {
            edges?: [
                {
                    node?: SessionPlanFile;
                }
            ];
        };
    }>(graphql`
        query SizeChartDownload {
            allFile(
                filter: {
                    name: { eq: "size-chart" }
                    relativeDirectory: { eq: "uniform-info" }
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
    `);
    const edge = data?.allFile?.edges?.[0]?.node;
    return edge ? (edge as SizeChartFile) : null;
}
