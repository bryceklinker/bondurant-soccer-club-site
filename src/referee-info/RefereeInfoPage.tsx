import React, { FunctionComponent } from 'react';
import {
    GappedStack,
    Title,
    useDirectorOfRefereesContact,
    useRefereeRecertificationCost,
    useRefereeRecertificationSteps,
    useRefereeRequiredTrainingLink
} from '../common';
import { BecomeARefereeInfo } from './BecomeARefereeInfo';
import { RecertificationUpdate } from './RecertificationUpdate';
import { RefereeMeetingNotes } from './RefereeMeetingNotes';

export const RefereeInfoPage: FunctionComponent = () => {
    const directorOfRefereesLink = useDirectorOfRefereesContact();
    const recertificationSteps = useRefereeRecertificationSteps();
    const recertificationCost = useRefereeRecertificationCost();
    const recertificationRequiredTrainingLink =
        useRefereeRequiredTrainingLink();
    return (
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
    );
};
