import React, { FunctionComponent } from 'react';
import { TreatTickets } from './TreatTickets';
import { ConcessionStandDutyAndSignup } from './ConcessionStandDutyAndSignup';
import { GappedStack } from '../common/components/GappedStack';
import { Title } from '../common/components/Title';
import {
    useConcessionSignupLink,
    useConcessionsLocation,
    useDirectorOfConcessionsMailLink
} from '../common/hooks/concessions-hooks';

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
