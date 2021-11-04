import React, {FunctionComponent} from 'react';
import {LocationData} from '../state';
import {Paragraph, Section, SubTitle, SectionTitle, EmbeddedMap, CollapsiblePanel} from '../../common';
import {Stack} from '@fluentui/react';
import './LocationSegment.css';

export interface LocationSegmentProps {
    data: LocationData;
}

export const LocationSegment: FunctionComponent<LocationSegmentProps> = ({data}) => {
    const ageGroups = data.ageGroups.map(a => <Paragraph>{a.name}</Paragraph>);
    return (
        <Section shadow padded>
            <CollapsiblePanel title={<SectionTitle>{data.title}</SectionTitle>}>
                <Stack horizontal tokens={{childrenGap: '1em'}} className={'location-section'}>
                    <Stack>
                        <SubTitle>Age Groups:</SubTitle>
                        {ageGroups}
                    </Stack>

                    <EmbeddedMap url={data.mapsUrl}/>
                </Stack>

            </CollapsiblePanel>
        </Section>
    );
};
