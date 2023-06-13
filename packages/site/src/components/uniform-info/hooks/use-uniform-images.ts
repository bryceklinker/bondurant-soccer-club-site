import {graphql, useStaticQuery} from 'gatsby';
import {ImageQueryResult} from '../../../common/hooks/use-images-query';

export function useUniformImages() {
    const query = graphql`
        query UniformImagesQuery {
            allFile(
                filter: {
                    relativeDirectory: { eq: "uniform-info" }
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
