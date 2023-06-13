import React, { FunctionComponent, useMemo } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { RowFlex } from '../../common/layout/RowFlex';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import { useUniformImages } from './hooks';

export const UniformImages: FunctionComponent = () => {
    const imageFiles = useUniformImages();
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
            <CollapsiblePanel
                title={<SectionTitle>Uniform Images</SectionTitle>}>
                <RowFlex className={'gap-4 flex-wrap'}>{images}</RowFlex>
            </CollapsiblePanel>
        </Section>
    );
};
