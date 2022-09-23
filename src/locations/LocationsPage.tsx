import React, { FunctionComponent } from 'react';
import { LocationSegment } from './LocationSegment';
import { GappedStack, Title } from '../common/components';
import { useLocations } from '../common/hooks';

export const LocationsPage: FunctionComponent = () => {
    const locations = useLocations();
    const segments = locations.map((l, i) => (
        <LocationSegment key={i} data={l} />
    ));
    return (
        <GappedStack padded>
            <Title>Locations</Title>
            {segments}
        </GappedStack>
    );
};
