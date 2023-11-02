import { FC } from 'react';
import { ImageSchedule } from './ImageSchedule';
import { NoScheduleAvailable } from './NoScheduleAvailable';

export const U7U8GirlsSchedule: FC = () => {
    const title = 'U7/U8 Girls Schedule';
    return (
        <ImageSchedule title={title}>
            <NoScheduleAvailable />
        </ImageSchedule>
    );
};
