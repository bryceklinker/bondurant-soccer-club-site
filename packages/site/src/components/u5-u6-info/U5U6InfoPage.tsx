import React, { FunctionComponent } from 'react';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { useCoachingDrills } from '../get-involved/hooks';
import { U5_U6ProgramInfo } from './U5_U6ProgramInfo';

export const U5U6InfoPage: FunctionComponent = () => {
    const drillLinks = useCoachingDrills();
    return (
        <GappedStack padded>
            <Title>U5/U6 Info</Title>

            <U5_U6ProgramInfo />
        </GappedStack>
    );
};
