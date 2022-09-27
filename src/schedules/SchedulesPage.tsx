import React, { FunctionComponent } from 'react';
import { U9AndUpSchedules } from './U9AndUpSchedules';
import { U5U6Schedule } from './U5U6Schedule';
import { U7U8CoedSchedule } from './U7U8CoedSchedule';
import { U7U8GirlsSchedule } from './U7U8GirlsSchedule';
import { useU9AndUpScheduleLink } from '../common/hooks/schedules-hooks';
import { GappedStack } from '../common/components/GappedStack';
import { Seo } from '../common/seo/Seo';

export const SchedulesPage: FunctionComponent = () => {
    const u9AndUpLink = useU9AndUpScheduleLink();
    return (
        <>
            <Seo
                title={'Schedules'}
                description={
                    'View game schedules for teams of the Bondurant Soccer Club'
                }
                route={'schedules'}
            />
            <GappedStack padded>
                <U5U6Schedule />
                <U7U8CoedSchedule />
                <U7U8GirlsSchedule />
                <U9AndUpSchedules link={u9AndUpLink} />
            </GappedStack>
        </>
    );
};
