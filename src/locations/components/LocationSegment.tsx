import React, {FunctionComponent, useCallback} from 'react';
import {LocationData} from '../state';
import {Paragraph, Section, SubTitle, Title} from '../../common';
import {List} from '@fluentui/react';
import {AgeGroup} from '../../common/state';

export interface LocationSegmentProps {
    data: LocationData;
}

export const LocationSegment: FunctionComponent<LocationSegmentProps> = ({data}) => {
    const renderAgeGroup = useCallback((ageGroup?: AgeGroup) => {
        if (!ageGroup) return null;

        return <Paragraph>{ageGroup.name}</Paragraph>
    }, []);
    return (
        <Section>
            <Title>{data.title}</Title>
            <SubTitle>Age Groups:</SubTitle>
            <List items={data.ageGroups} onRenderCell={renderAgeGroup} />
            <a target={'_blank'} href={data.mapsUrl}>Google Map Location</a>
        </Section>
    )
}
