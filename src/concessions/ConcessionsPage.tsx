import React, { FunctionComponent } from 'react';
import {
    GappedStack,
    Title,
    useConcessionHoursImage,
    useConcessionSignupLink,
    useConcessionsLocation,
    useDirectorOfConcessionsMailLink
} from '../common';
import { TreatTickets } from './TreatTickets';
import { ConcessionStandDutyAndSignup } from './ConcessionStandDutyAndSignup';
import { Layout } from '../common/layout/Layout';

export const ConcessionsPage: FunctionComponent = () => {
    const concessionLocation = useConcessionsLocation();
    const signupLink = useConcessionSignupLink();
    const contactLink = useDirectorOfConcessionsMailLink();
    const hoursImage = useConcessionHoursImage();
    return (
        <GappedStack padded flex>
            <Title>Concessions Info</Title>

            <TreatTickets location={concessionLocation} />
            <ConcessionStandDutyAndSignup
                signupLink={signupLink}
                contactLink={contactLink}
                hoursImage={hoursImage}
            />
        </GappedStack>
    );
};
