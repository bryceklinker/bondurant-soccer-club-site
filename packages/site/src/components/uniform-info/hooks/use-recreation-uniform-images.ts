import { graphql, useStaticQuery } from 'gatsby';
import { ImageQueryResult } from '../../../common/hooks/use-images-query';

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
    return data?.allFile?.nodes ?? [];
}
