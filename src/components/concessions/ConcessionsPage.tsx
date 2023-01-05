import React, { FunctionComponent } from 'react';
import { TreatTickets } from './TreatTickets';
import { ConcessionStandDutyAndSignup } from './ConcessionStandDutyAndSignup';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { Seo } from '../../common/seo/Seo';
import {
    useConcessionSignupLink,
    useConcessionsLocation,
    useDirectorOfConcessionsMailLink
} from './hooks';

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
