import React, {FunctionComponent} from 'react';
import {useSiteState} from '../../state';
import {LocationSegment} from './LocationSegment';
import {GappedStack, Title} from '../../common';

export const LocationsPage: FunctionComponent = () => {
    const {locations} = useSiteState();
    const segments = locations.map((l, i) => <LocationSegment key={i} data={l}/>);
    return (
        <GappedStack className={'padded-content flex'}>
            <Title>Locations</Title>
            {segments}
        </GappedStack>
    );
};
