import {FunctionComponent} from 'react';
import {GappedStack, Title, useCoachingDrills, useSchedulesLink} from '../common';
import {RequiredEquipment} from './RequiredEquipment';
import {Weather} from './Weather';
import {Coaching} from './Coaching';
import {PracticesAndGames} from './PracticesAndGames';
import {DrillsYouCanDoAtHome} from './DrillsYouCanDoAtHome';

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
    )
}
