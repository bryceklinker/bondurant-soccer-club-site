import { FunctionComponent } from 'react';
import { ByLaws } from './ByLaws';
import { CoachingCodeOfConduct } from './CoachingCodeOfConduct';
import { ParentCodeOfConduct } from './ParentCodeOfConduct';
import { PlayerCodeOfConduct } from './PlayerCodeOfConduct';
import { DownloadableDocuments } from './DownloadableDocuments';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { Seo } from '../../common/seo/Seo';
import {
    useByLaws,
    useCoachingCodeOfConductExpectations,
    useCodeOfConductPunishments,
    useCodeOfConductReportHandlingSteps,
    useDownloadableDocuments,
    useParentCodeOfConductExpectations
} from './hooks';

export const DocumentsPage: FunctionComponent = () => {
    const byLaws = useByLaws();
    const coachingExpectations = useCoachingCodeOfConductExpectations();
    const parentExpectations = useParentCodeOfConductExpectations();
    const reportingSteps = useCodeOfConductReportHandlingSteps();
    const punishments = useCodeOfConductPunishments();
    const documentLinks = useDownloadableDocuments();
    return (
        <>
            <Seo
                title={'Documents'}
                description={'View common Bondurant Soccer Club documents'}
                route={'documents'}
            />
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
        </>
    );
};
