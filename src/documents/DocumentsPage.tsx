import { FunctionComponent } from 'react';
import { ByLaws } from './ByLaws';
import { CoachingCodeOfConduct } from './CoachingCodeOfConduct';
import { ParentCodeOfConduct } from './ParentCodeOfConduct';
import { PlayerCodeOfConduct } from './PlayerCodeOfConduct';
import { DownloadableDocuments } from './DownloadableDocuments';
import { useByLaws } from '../common/hooks/by-laws-hooks';
import {
    useCoachingCodeOfConductExpectations,
    useCodeOfConductPunishments,
    useCodeOfConductReportHandlingSteps,
    useParentCodeOfConductExpectations
} from '../common/hooks/code-of-conduct-hooks';
import { useDownloadableDocuments } from '../common/hooks/downloadable-document-hooks';
import { GappedStack } from '../common/components/GappedStack';
import { Title } from '../common/components/Title';

export const DocumentsPage: FunctionComponent = () => {
    const byLaws = useByLaws();
    const coachingExpectations = useCoachingCodeOfConductExpectations();
    const parentExpectations = useParentCodeOfConductExpectations();
    const reportingSteps = useCodeOfConductReportHandlingSteps();
    const punishments = useCodeOfConductPunishments();
    const documentLinks = useDownloadableDocuments();
    return (
        <GappedStack padded>
            <Title>Documents</Title>

            <DownloadableDocuments documentLinks={documentLinks} />
            <ByLaws byLaws={byLaws} />
            <CoachingCodeOfConduct
                expectations={coachingExpectations}
                reportingSteps={reportingSteps}
                punishments={punishments}
            />

            <ParentCodeOfConduct
                expectations={parentExpectations}
                punishments={punishments}
                reportingSteps={reportingSteps}
            />

            <PlayerCodeOfConduct
                expectations={parentExpectations}
                punishments={punishments}
                reportingSteps={reportingSteps}
            />
        </GappedStack>
    );
};
