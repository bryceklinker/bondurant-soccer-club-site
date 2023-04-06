import { FieldLayoutData } from '../../common/state/location-data';
import { FC } from 'react';
import { SubTitle } from '../../common/components/SubTitle';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import { GatsbyImage } from 'gatsby-plugin-image';
import {useFieldLayoutImage} from './hooks';

export type FieldLayoutProps = {
    data: FieldLayoutData;
};
export const FieldLayout: FC<FieldLayoutProps> = ({ data }) => {
    const image = useFieldLayoutImage(data.image);

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
