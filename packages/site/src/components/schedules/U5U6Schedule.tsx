import { FC } from 'react';
import { ImageSchedule } from './ImageSchedule';
import { StaticImage } from 'gatsby-plugin-image';

export const U5U6Schedule: FC = () => {
    const title = 'U5/U6 Schedule';
    return (
        <ImageSchedule title={title}>
            <StaticImage src={'../../assets/u5_u6_schedule.jpg'} alt={title} />
        </ImageSchedule>
    );
};
