import React, { FC } from 'react';
import { TreatTickets } from './TreatTickets';
import { ConcessionStandDutyAndSignup } from './ConcessionStandDutyAndSignup';
import {
    useConcessionSignupLink,
    useConcessionsLocation,
    useDirectorOfConcessionsMailLink
} from './hooks';

export const ConcessionsOpportunities: FC = () => {
    const concessionLocation = useConcessionsLocation();
    const signupLink = useConcessionSignupLink();
    const contactLink = useDirectorOfConcessionsMailLink();
    return (
        <>
            <TreatTickets location={concessionLocation} />
            <ConcessionStandDutyAndSignup
                signupLink={signupLink}
                contactLink={contactLink}
            />
        </>
    );
};
