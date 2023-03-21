import { FC } from 'react';
import { ImageSchedule } from './ImageSchedule';
import { StaticImage } from 'gatsby-plugin-image';

export const U7U8CoedSchedule: FC = () => {
    const title = 'U7/U8 Schedule';
    return (
        <ImageSchedule title={title}>
            <StaticImage
                src={'../../assets/u7_u8_coed_schedule.png'}
                alt={title}
            />
        </ImageSchedule>
    );
};
