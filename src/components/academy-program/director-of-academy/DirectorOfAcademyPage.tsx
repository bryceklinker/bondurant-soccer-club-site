import { FC } from 'react';
import { Seo } from '../../../common/seo/Seo';
import { GappedStack } from '../../../common/components/GappedStack';
import { Section } from '../../../common/components/Section';
import { Title } from '../../../common/components/Title';
import { JobSummary } from './JobSummary';
import { RolesAndResponsibilities } from './RolesAndResponsibilities';
import { RequirementsAndQualifications } from './RequirementsAndQualifications';
import { AdditionalExpectations } from './AdditionalExpectations';
import { TrainingStructure } from './TrainingStructure';
import { SelectionProcess } from './SelectionProcess';
import { QuestionsAndApplication } from './QuestionsAndApplication';

export const DirectorOfAcademyPage: FC = () => {
    return (
        <GappedStack padded>
            <Title>Director of Academy Job Description</Title>
            <Section shadow padded>
                <JobSummary />
                <RolesAndResponsibilities />
                <RequirementsAndQualifications />
                <AdditionalExpectations />
                <TrainingStructure />
                <SelectionProcess />
                <QuestionsAndApplication />
            </Section>
        </GappedStack>
    );
};
