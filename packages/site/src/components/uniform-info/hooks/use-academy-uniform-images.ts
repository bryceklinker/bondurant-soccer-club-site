import { graphql, useStaticQuery } from 'gatsby';
import { ImageQueryResult } from '../../../common/hooks/use-images-query';
import { useMemo } from 'react';
import { Arrays } from '../../../common/extensions/arrays';

export function useAcademyUniformImages() {
    const query = graphql`
        query AcademyUniformImagesQuery {
            allFile(
                filter: {
                    relativeDirectory: { eq: "uniform-info/academy" }
                    extension: { eq: "webp" }
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
