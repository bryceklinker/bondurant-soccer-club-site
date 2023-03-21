import React, { FunctionComponent } from 'react';
import { RequiredEquipment } from './RequiredEquipment';
import { Weather } from './Weather';
import { Coaching } from './Coaching';
import { PracticesAndGames } from './PracticesAndGames';
import { DrillsYouCanDoAtHome } from './DrillsYouCanDoAtHome';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { Seo } from '../../common/seo/Seo';
import { useSchedulesLink } from '../schedules/hooks';
import { useCoachingDrills } from '../get-involved/hooks';

export const U5U6InfoPage: FunctionComponent = () => {
    const schedulesLink = useSchedulesLink();
    const drillLinks = useCoachingDrills();
    return (
        <GappedStack padded>
            <Title>U5/U6 Info</Title>

            <RequiredEquipment />
            <Weather />
            <Coaching />
            <PracticesAndGames schedulesLink={schedulesLink} />
            <DrillsYouCanDoAtHome drillLinks={drillLinks} />
        </GappedStack>
    );
};
