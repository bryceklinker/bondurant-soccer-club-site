import {FunctionComponent} from 'react';
import {GappedStack, useScheduleImages, useU9AndUpScheduleLink} from '../common';
import {ImageSchedule} from './ImageSchedule';
import {U9AndUpSchedules} from './U9AndUpSchedules';

export const SchedulesPage: FunctionComponent = () => {
    const scheduleImages = useScheduleImages();
    const u9AndUpLink = useU9AndUpScheduleLink();
    const imageSchedules = scheduleImages.map((s, i) => <ImageSchedule key={i} title={s.title} image={s.image} />);
    return (
        <GappedStack padded>
            {imageSchedules}
            <U9AndUpSchedules link={u9AndUpLink}/>
        </GappedStack>
    );
}
