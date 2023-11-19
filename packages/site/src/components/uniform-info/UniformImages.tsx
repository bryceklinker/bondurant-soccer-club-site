import React, { FC, useMemo } from 'react';
import { ImageFile } from '../../common/hooks/use-images-query';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Section } from '../../common/components/Section';
import { RowFlex } from '../../common/layout/RowFlex';

export type UniformImagesProps = {
    imageFiles: ImageFile[];
};

export const UniformImages: FC<UniformImagesProps> = ({ imageFiles }) => {
    const images = useMemo(
        () =>
            imageFiles.map(file => (
                <ColumnFlex className={'items-center min-w-[45%]'}>
                    <GatsbyImage
                        alt={file.name}
                        image={file.childImageSharp.gatsbyImageData}
                    />
                </ColumnFlex>
            )),
        [imageFiles]
    );
    return (
        <Section padded shadow>
            <RowFlex className={'gap-4 flex-wrap'}>{images}</RowFlex>
        </Section>
    );
};
