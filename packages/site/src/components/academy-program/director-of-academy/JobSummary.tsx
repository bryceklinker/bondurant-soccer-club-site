import { FC } from 'react';
import { SectionTitle } from '../../../common/components/SectionTitle';
import { Paragraph } from '../../../common/components/Paragraph';

export const JobSummary: FC = () => {
    return (
        <>
            <SectionTitle className={'pb-4'}>Job Summary</SectionTitle>

            <Paragraph>
                Player training and coach development will be the primary
                responsibility of the Director of Academy Program Training.
                Training will be led by the Director of Academy Program Training
                and will be held with multiple teams together. Individual team
                skill practice will break out by team during training as
                directed by the Director of Academy Program Training. Each team
                will be led by a Head Coach and an optional Assistant Coach. The
                Academy Program will be run by the Director of Academy Program
                Training (paid position) and overseen by the Director of Academy
                Operations (Board member - volunteer).
            </Paragraph>
        </>
    );
};
