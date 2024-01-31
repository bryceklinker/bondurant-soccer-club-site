import { FC } from 'react';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { FullSeasonVolunteerPosition } from './FullSeasonVolunteerPosition';
import { CoachPosition } from './CoachPosition';
import { BoardMemberPosition } from './BoardMemberPosition';
import { Spacer } from '../../common/components/Spacer';

export const VolunteerPositions: FC = () => {
    return (
        <Section shadow padded>
            <CollapsiblePanel
                title={
                    <SectionTitle>
                        One Child Registration Fee and Volunteer Fee Reimbursed
                    </SectionTitle>
                }>
                <Spacer />
                <FullSeasonVolunteerPosition />
                <CoachPosition />
                <BoardMemberPosition />
            </CollapsiblePanel>
        </Section>
    );
};
