import React, { FC } from 'react';
import { Seo } from '../../common/seo/Seo';
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
import { AcademyProgramCosts } from './AcademyProgramCosts';

export const AcademyProgramPage: FC = () => {
    return (
        <>
            <Seo
                title={'Academy Program'}
                description={
                    'Bondurant soccer club academy program information'
                }
                route={'academy-program'}
            />
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
        </>
    );
};
