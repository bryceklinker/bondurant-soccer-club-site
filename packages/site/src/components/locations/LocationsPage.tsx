import { FunctionComponent } from 'react';
import { LocationSegment } from './LocationSegment';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { useLocations } from './hooks';

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
