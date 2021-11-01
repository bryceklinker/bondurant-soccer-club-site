import React, {FunctionComponent} from 'react';
import {useSiteState} from '../../state';
import {LocationSegment} from './LocationSegment';
import {Media} from '../../common';
import {SegmentGroup} from 'semantic-ui-react';

export const LocationsPage: FunctionComponent = () => {
    const {locations} = useSiteState()
    const segments = locations.map((l, i) => <LocationSegment key={i} data={l} />);
    return (
        <div className={'padded-content'}>
            <Media greaterThan={'mobile'}>
                <SegmentGroup horizontal>
                    {segments}
                </SegmentGroup>
            </Media>
            <Media at={'mobile'}>
                {segments}
            </Media>
        </div>
    )
}
