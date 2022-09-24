import { FC } from 'react';
import { ImageSchedule } from './ImageSchedule';
import { StaticImage } from 'gatsby-plugin-image';

export const U7U8GirlsSchedule: FC = () => {
    const title = 'U7/U8 Girls Schedule';
    return (
        <ImageSchedule title={title}>
            <StaticImage
                src={'../assets/u7_u8_girls_schedule.jpeg'}
                alt={title}
            />
        </ImageSchedule>
    );
};
