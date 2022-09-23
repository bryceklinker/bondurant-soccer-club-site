import React, { FunctionComponent } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { CollapsiblePanel, Section, SectionTitle } from '../common';

export interface ImageScheduleProps {
    title: string;
    image: any;
}

export const ImageSchedule: FunctionComponent<ImageScheduleProps> = ({
    title,
    image
}) => {
    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>{title}</SectionTitle>}>
                <StaticImage src={image} alt={title} />
            </CollapsiblePanel>
        </Section>
    );
};
