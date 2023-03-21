import { useMemo } from 'react';
import { SCHEDULES_LINK, U9_AND_UP_SCHEDULE_LINK } from './state';

export function useU9AndUpScheduleLink() {
    return useMemo(() => U9_AND_UP_SCHEDULE_LINK, []);
}

export function useSchedulesLink() {
    return useMemo(() => SCHEDULES_LINK, []);
}
