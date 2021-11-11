import React, {FunctionComponent} from 'react';
import {Image} from '@fluentui/react';
import {CollapsiblePanel, Section, SectionTitle} from '../common';

export interface ImageScheduleProps {
    title: string;
    image: any;
}

export const ImageSchedule: FunctionComponent<ImageScheduleProps> = ({title, image}) => {
    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>{title}</SectionTitle>}>
                <Image src={image}/>
            </CollapsiblePanel>
        </Section>
    );
};
