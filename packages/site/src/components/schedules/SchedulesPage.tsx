import React, { FunctionComponent } from 'react';
import { U9AndUpSchedules } from './U9AndUpSchedules';
import { U5U6Schedule } from './U5U6Schedule';
import { U7U8CoedSchedule } from './U7U8CoedSchedule';
import { U7U8GirlsSchedule } from './U7U8GirlsSchedule';
import { GappedStack } from '../../common/components/GappedStack';
import { Seo } from '../../common/seo/Seo';
import { useU9AndUpScheduleLink } from './hooks';

export const SchedulesPage: FunctionComponent = () => {
    const u9AndUpLink = useU9AndUpScheduleLink();
    return (
        <GappedStack padded>
            <U5U6Schedule />
            <U7U8CoedSchedule />
            <U7U8GirlsSchedule />
            <U9AndUpSchedules link={u9AndUpLink} />
        </GappedStack>
    );
};