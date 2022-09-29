import React, { FunctionComponent } from 'react';
import { LocationSegment } from './LocationSegment';
import { useLocations } from '../../common/hooks/locations-hooks';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { Seo } from '../../common/seo/Seo';

export const LocationsPage: FunctionComponent = () => {
    const locations = useLocations();
    const segments = locations.map((l, i) => (
        <LocationSegment key={i} data={l} />
    ));
    return (
        <>
            <Seo
                title={'Locations'}
                description={'Find the locations for the Bondurant Soccer Club'}
                route={'locations'}
            />
            <GappedStack padded>
                <Title>Locations</Title>
                {segments}
            </GappedStack>
        </>
    );
};
