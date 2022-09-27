import React, { FunctionComponent } from 'react';
import {
    useDirectorOfRefereesContact,
    useRefereeRecertificationCost,
    useRefereeRecertificationSteps,
    useRefereeRequiredTrainingLink
} from '../common/hooks/referees-hooks';
import { BecomeARefereeInfo } from './BecomeARefereeInfo';
import { RecertificationUpdate } from './RecertificationUpdate';
import { RefereeMeetingNotes } from './RefereeMeetingNotes';
import { GappedStack } from '../common/components/GappedStack';
import { Title } from '../common/components/Title';
import { Seo } from '../common/seo/Seo';

export const RefereeInfoPage: FunctionComponent = () => {
    const directorOfRefereesLink = useDirectorOfRefereesContact();
    const recertificationSteps = useRefereeRecertificationSteps();
    const recertificationCost = useRefereeRecertificationCost();
    const recertificationRequiredTrainingLink =
        useRefereeRequiredTrainingLink();
    return (
        <>
            <Seo
                title={'Referee Info'}
                description={
                    'Learn how to become a referee for the Bondurant Soccer Club'
                }
                route={'referee-info'}
            />
            <GappedStack padded>
                <Title>Referee Info</Title>

                <BecomeARefereeInfo contactLink={directorOfRefereesLink} />
                <RecertificationUpdate
                    steps={recertificationSteps}
                    cost={recertificationCost}
                    requiredTrainingLink={recertificationRequiredTrainingLink}
                />
                <RefereeMeetingNotes contactLink={directorOfRefereesLink} />
            </GappedStack>
        </>
    );
};
