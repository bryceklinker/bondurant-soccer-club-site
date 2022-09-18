import {FunctionComponent} from 'react';
import {LocationSegment} from './LocationSegment';
import {GappedStack, Title, useLocations} from '../common';

export const LocationsPage: FunctionComponent = () => {
    const locations = useLocations();
    const segments = locations.map((l, i) => <LocationSegment key={i} data={l}/>);
    return (
        <GappedStack padded flex>
            <Title>Locations</Title>
            {segments}
        </GappedStack>

    );
};
