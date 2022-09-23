import React, { FunctionComponent } from 'react';
import { GappedStack, Title } from '../common/components';
import { TreatTickets } from './TreatTickets';
import { ConcessionStandDutyAndSignup } from './ConcessionStandDutyAndSignup';
import {
    useConcessionSignupLink,
    useConcessionsLocation,
    useDirectorOfConcessionsMailLink
} from '../common/hooks';

export const ConcessionsPage: FunctionComponent = () => {
    const concessionLocation = useConcessionsLocation();
    const signupLink = useConcessionSignupLink();
    const contactLink = useDirectorOfConcessionsMailLink();
    return (
        <GappedStack padded>
            <Title>Concessions Info</Title>

            <TreatTickets location={concessionLocation} />
            <ConcessionStandDutyAndSignup
                signupLink={signupLink}
                contactLink={contactLink}
            />
        </GappedStack>
    );
};
