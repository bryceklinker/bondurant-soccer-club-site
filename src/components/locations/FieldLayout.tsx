import { FieldLayoutData } from '../../common/state/location-data';
import { FC } from 'react';
import { SubTitle } from '../../common/components/SubTitle';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

type ImageQuery = {
    allFile: {
        nodes: [
            {
                name: string;
                childImageSharp: {
                    gatsbyImageData: IGatsbyImageData;
                };
            }
        ];
    };
};

export type FieldLayoutProps = {
    data: FieldLayoutData;
};
export const FieldLayout: FC<FieldLayoutProps> = ({ data }) => {
    const imageData = useStaticQuery<ImageQuery>(graphql`
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
    const image = imageData.allFile.nodes.find(i => i.name === data.image);

    if (!image) {
        return null;
    }

    return (
        <ColumnFlex>
            <SubTitle>{data.title}</SubTitle>
            <ColumnFlex className={'m-4 align-center'}>
                <GatsbyImage
                    imgStyle={{ objectFit: 'scale-down' }}
                    image={image.childImageSharp.gatsbyImageData}
                    alt={data.alt}
                />
            </ColumnFlex>
        </ColumnFlex>
    );
};
