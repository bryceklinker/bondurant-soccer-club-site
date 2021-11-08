import React, {FunctionComponent} from 'react';
import {GappedStack} from '../../common';
import {useSiteState} from '../../state';
import {ImageSchedule} from './ImageSchedule';
import {U9AndUpSchedules} from './U9AndUpSchedules';

export const SchedulesPage: FunctionComponent = () => {
    const {scheduleImages} = useSiteState();
    const imageSchedules = scheduleImages.map((s, i) => <ImageSchedule key={i} title={s.title} image={s.image} />);
    return (
        <GappedStack padded flex>
            {imageSchedules}
            <U9AndUpSchedules />
        </GappedStack>
    );
}
