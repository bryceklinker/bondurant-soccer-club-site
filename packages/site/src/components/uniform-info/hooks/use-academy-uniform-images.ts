import { graphql, useStaticQuery } from 'gatsby';
import { ImageQueryResult } from '../../../common/hooks/use-images-query';

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
    return data?.allFile?.nodes ?? [];
}
