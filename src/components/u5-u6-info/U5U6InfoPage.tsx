import React, { FunctionComponent } from 'react';
import { RequiredEquipment } from './RequiredEquipment';
import { Weather } from './Weather';
import { Coaching } from './Coaching';
import { PracticesAndGames } from './PracticesAndGames';
import { DrillsYouCanDoAtHome } from './DrillsYouCanDoAtHome';
import { useSchedulesLink } from '../../common/hooks/schedules-hooks';
import { useCoachingDrills } from '../../common/hooks/get-involved-hooks';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { Seo } from '../../common/seo/Seo';

export const U5U6InfoPage: FunctionComponent = () => {
    const schedulesLink = useSchedulesLink();
    const drillLinks = useCoachingDrills();
    return (
        <>
            <Seo
                title={'U5/U6 Program Info'}
                description={
                    'Learn about U5/U6 program at the Bondurant Soccer Club'
                }
                route={'u5-u6-info'}
            />
            <GappedStack padded>
                <Title>U5/U6 Info</Title>

                <RequiredEquipment />
                <Weather />
                <Coaching />
                <PracticesAndGames schedulesLink={schedulesLink} />
                <DrillsYouCanDoAtHome drillLinks={drillLinks} />
            </GappedStack>
        </>
    );
};
