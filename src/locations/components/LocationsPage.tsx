import React, {FunctionComponent} from 'react';
import {useSiteState} from '../../state';
import {LocationSegment} from './LocationSegment';
import {GappedStack} from '../../common';

export const LocationsPage: FunctionComponent = () => {
    const {locations} = useSiteState();
    const segments = locations.map((l, i) => <LocationSegment key={i} data={l}/>);
    return (
        <GappedStack horizontal className={'padded-content'}>
            {segments}
        </GappedStack>
    );
};
