import {graphql, useStaticQuery} from 'gatsby';
import {StaticQueryResult} from '../../../common/hooks/use-files-query';

export function useSizeChartDownload() {
    const query = graphql`
        query SizeChartQuery {
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
    `;
    const data = useStaticQuery<StaticQueryResult>(query);
    const nodes = data?.allFile?.edges
        ?.map(e => e.node) ?? [];
    return nodes[0] ?? null;
}
