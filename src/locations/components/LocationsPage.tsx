import React, {FunctionComponent} from 'react';
import {useSiteState} from '../../state';
import {LocationSegment} from './LocationSegment';
import {GappedStack, Title} from '../../common';
import { Stack } from '@fluentui/react';

export const LocationsPage: FunctionComponent = () => {
    const {locations} = useSiteState();
    const segments = locations.map((l, i) => <LocationSegment key={i} data={l}/>);
    return (
        <Stack className={'flex padded-content'}>
            <Title>Locations</Title>
            <GappedStack>
                {segments}
            </GappedStack>
        </Stack>

    );
};
