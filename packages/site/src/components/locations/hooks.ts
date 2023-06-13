import { useMemo } from 'react';
import { LOCATIONS, COLLISON_SOCCER_PARK_LOCATION } from './state';
import {graphql, useStaticQuery} from 'gatsby';
import {ImageQueryResult} from '../../common/hooks/use-images-query';

export function useLocations() {
    return useMemo(() => LOCATIONS, []);
}

export function useWestComplexLocation() {
    return useMemo(() => COLLISON_SOCCER_PARK_LOCATION, []);
}

export function useFieldLayoutImage(name: string) {
    const query = graphql`
        query FieldLayoutImageQuery {
            allFile(
                filter: {
                    relativeDirectory: { eq: "field-layouts" }
                    extension: { eq: "jpeg" }
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
    return nodes.find(i => i.name === name);
}
