import { useMemo } from 'react';
import { LOCATIONS, COLLISON_SOCCER_PARK_LOCATION } from './state';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

export function useLocations() {
    return useMemo(() => LOCATIONS, []);
}

export function useWestComplexLocation() {
    return useMemo(() => COLLISON_SOCCER_PARK_LOCATION, []);
}

type ImageQuery = {
    allFile?: {
        nodes?: [
            {
                name: string;
                childImageSharp: {
                    gatsbyImageData: IGatsbyImageData;
                };
            }
        ];
    };
};

export function useFieldLayoutImage(name: string) {
    const data = useStaticQuery<ImageQuery>(graphql`
        query FieldLayoutImage {
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
    `);

    const nodes = data?.allFile?.nodes ?? [];
    return nodes.find(i => i.name === name);
}
