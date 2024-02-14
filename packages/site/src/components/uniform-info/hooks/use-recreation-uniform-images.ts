import { graphql, useStaticQuery } from 'gatsby';
import { ImageQueryResult } from '../../../common/hooks/use-images-query';
import { useMemo } from 'react';
import { Arrays } from '../../../common/extensions/arrays';

export function useRecreationUniformImages() {
    const query = graphql`
        query RecreationUniformImagesQuery {
            allFile(
                filter: {
                    relativeDirectory: { eq: "uniform-info/recreation" }
                    extension: { eq: "png" }
                }
            ) {
                nodes {
                    name
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    `;
    const data = useStaticQuery<ImageQueryResult>(query);
    const nodes = data?.allFile?.nodes ?? [];
    return useMemo(() => Arrays.sortBy(nodes, i => i.name), [nodes]);
}
