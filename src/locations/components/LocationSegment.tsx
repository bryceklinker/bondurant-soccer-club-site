import React, {FunctionComponent, useCallback} from 'react';
import {LocationData} from '../state';
import {Paragraph, Section, Spacer, SubTitle, AgeGroup, SectionTitle} from '../../common';
import {List, PrimaryButton, Stack} from '@fluentui/react';

export interface LocationSegmentProps {
    data: LocationData;
}

export const LocationSegment: FunctionComponent<LocationSegmentProps> = ({data}) => {
    const ageGroups = data.ageGroups.map(a => a.name).join(', ');
    return (
        <Section shadow className={'padded-content'}>
            <SectionTitle>{data.title}</SectionTitle>
            <Stack horizontal verticalAlign={'center'}>
                <SubTitle>Age Groups:&nbsp;</SubTitle>
                <Paragraph>{ageGroups}</Paragraph>
            </Stack>

            <Spacer />
            <PrimaryButton as={'a'} target={'_blank'} href={data.mapsUrl}>Google Map Location</PrimaryButton>
        </Section>
    )
}
