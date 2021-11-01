import React, {FunctionComponent} from 'react';
import {LocationData} from '../state';
import {Header, List, Segment} from 'semantic-ui-react';

export interface LocationSegmentProps {
    data: LocationData;
}

export const LocationSegment: FunctionComponent<LocationSegmentProps> = ({data}) => {
    const ageGroups = data.ageGroups.map((a, i) => <List.Item key={i}>{a.name}</List.Item>)
    return (
        <Segment>
            <Header as={'h3'}>{data.title}</Header>
            <Header as={'h4'}>Age Groups:</Header>
            <List>
                {ageGroups}
            </List>
            <a target={'_blank'} href={data.mapsUrl}>Google Map Location</a>
        </Segment>
    )
}
