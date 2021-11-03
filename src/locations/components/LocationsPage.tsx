import React, {FunctionComponent} from 'react';
import {useSiteState} from '../../state';
import {LocationSegment} from './LocationSegment';

export const LocationsPage: FunctionComponent = () => {
    const {locations} = useSiteState()
    const segments = locations.map((l, i) => <LocationSegment key={i} data={l} />);
    return (
        <div className={'padded-content'}>
                {segments}
        </div>
    )
}
