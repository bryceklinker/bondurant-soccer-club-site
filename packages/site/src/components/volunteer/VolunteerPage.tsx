import { FC } from 'react';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { RefereePositions } from './RefereePositions';
import { ConcessionManagementPosition } from './concessions/ConcessionManagementPosition';
import { DirectorOfAcademyPosition } from './DirectorOfAcademyPosition';
import { SingleTimeVolunteerPosition } from './SingleTimeVolunteerPosition';
import { FullSeasonVolunteerPosition } from './FullSeasonVolunteerPosition';
import { CoachPosition } from './CoachPosition';
import { BoardMemberPosition } from './BoardMemberPosition';

export const VolunteerPage: FC = () => {
    return (
        <GappedStack padded>
            <Title>Volunteer</Title>

            <SingleTimeVolunteerPosition />
            <FullSeasonVolunteerPosition />
            <CoachPosition />
            <BoardMemberPosition />

            <Title>Contracted Positions</Title>

            <RefereePositions />
            <ConcessionManagementPosition />
            <DirectorOfAcademyPosition />
        </GappedStack>
    );
};
