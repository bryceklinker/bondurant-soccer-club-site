import React, { FC } from 'react';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { RegisterHereButton } from '../../common/components/RegisterHereButton';
import { AcademyProgramOverview } from './AcademyProgramOverview';
import { AcademyProgramGoals } from './AcademyProgramGoals';
import { AcademyProgramWhy } from './AcademyProgramWhy';
import { AcademyProgramBenefits } from './AcademyProgramBenefits';
import { AcademyProgramTeamFormation } from './AcademyProgramTeamFormation';
import { AcademyProgramLeagueFormat } from './AcademyProgramLeagueFormat';
import { AcademyProgramRequirements } from './AcademyProgramRequirements';
import { AcademyProgramSuppliesNeeded } from './AcademyProgramSuppliesNeeded';

export const AcademyProgramPage: FC = () => {
    return (
        <GappedStack padded>
            <Title>Academy Program</Title>

            <RegisterHereButton />

            <AcademyProgramOverview />
            <AcademyProgramGoals />
            <AcademyProgramWhy />
            <AcademyProgramBenefits />
            <AcademyProgramTeamFormation />
            <AcademyProgramLeagueFormat />
            <AcademyProgramRequirements />
            <AcademyProgramSuppliesNeeded />
        </GappedStack>
    );
};
