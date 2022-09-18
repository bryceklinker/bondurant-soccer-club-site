import {FunctionComponent} from 'react';
import {
    GappedStack,
    Title,
    useByLaws,
    useCoachingCodeOfConductExpectations,
    useCodeOfConductReportHandlingSteps,
    useCodeOfConductPunishments,
    useParentCodeOfConductExpectations,
    useDownloadableDocuments
} from '../common';
import {ByLaws} from './ByLaws';
import {CoachingCodeOfConduct} from './CoachingCodeOfConduct';
import {ParentCodeOfConduct} from './ParentCodeOfConduct';
import {PlayerCodeOfConduct} from './PlayerCodeOfConduct';
import {DownloadableDocuments} from './DownloadableDocuments';

export const DocumentsPage: FunctionComponent = () => {
    const byLaws = useByLaws();
    const coachingExpectations = useCoachingCodeOfConductExpectations();
    const parentExpectations = useParentCodeOfConductExpectations();
    const reportingSteps = useCodeOfConductReportHandlingSteps();
    const punishments = useCodeOfConductPunishments();
    const documentLinks = useDownloadableDocuments();
    return (
        <GappedStack padded flex>
            <Title>Documents</Title>

            <DownloadableDocuments documentLinks={documentLinks} />
            <ByLaws byLaws={byLaws}/>
            <CoachingCodeOfConduct expectations={coachingExpectations}
                                   reportingSteps={reportingSteps}
                                   punishments={punishments}/>

            <ParentCodeOfConduct expectations={parentExpectations}
                                 punishments={punishments}
                                 reportingSteps={reportingSteps}/>

            <PlayerCodeOfConduct expectations={parentExpectations}
                                 punishments={punishments}
                                 reportingSteps={reportingSteps}/>
        </GappedStack>
    );
};
