import { FC } from 'react';
import { ImageSchedule } from './ImageSchedule';
import { NoScheduleAvailable } from './NoScheduleAvailable';

export const U5U6Schedule: FC = () => {
    const title = 'U5/U6 Schedule';
    return (
        <ImageSchedule title={title}>
            <NoScheduleAvailable />
        </ImageSchedule>
    );
};
