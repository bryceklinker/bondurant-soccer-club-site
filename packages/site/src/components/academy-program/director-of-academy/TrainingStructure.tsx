import { FC } from 'react';
import { SectionTitle } from '../../../common/components/SectionTitle';
import { Paragraph } from '../../../common/components/Paragraph';

export const TrainingStructure: FC = () => {
    return (
        <>
            <SectionTitle className={'py-4'}>Training Structure</SectionTitle>

            <Paragraph>
                At least two training sessions per week (see above) will be
                expected of the BSC Academy Program. Both training sessions will
                follow the Play, Practice, Play methodology with approved lesson
                plans for skill development. During the pre-season, an
                additional, and optional training session may be scheduled to
                focus on specific skill development such as goalie training.
                Schedules will be made by the Director of Academy Training and
                approved by the Director of Academy Operations Board Member.
            </Paragraph>
        </>
    );
};
