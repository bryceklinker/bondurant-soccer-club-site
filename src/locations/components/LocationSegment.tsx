import React, {FunctionComponent, useCallback} from 'react';
import {LocationData} from '../state';
import {Paragraph, Section, Spacer, SubTitle, AgeGroup} from '../../common';
import {List, PrimaryButton} from '@fluentui/react';

export interface LocationSegmentProps {
    data: LocationData;
}

export const LocationSegment: FunctionComponent<LocationSegmentProps> = ({data}) => {
    const renderAgeGroup = useCallback((ageGroup?: AgeGroup) => {
        if (!ageGroup) return null;

        return <Paragraph>{ageGroup.name}</Paragraph>
    }, []);
    return (
        <Section shadow className={'padded-content'}>
            <SubTitle>{data.title}</SubTitle>
            <SubTitle>Age Groups:</SubTitle>
            <List items={data.ageGroups} onRenderCell={renderAgeGroup} />
            <Spacer />
            <PrimaryButton as={'a'} target={'_blank'} href={data.mapsUrl}>Google Map Location</PrimaryButton>
        </Section>
    )
}
