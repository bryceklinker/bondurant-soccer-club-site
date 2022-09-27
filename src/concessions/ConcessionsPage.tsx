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
import { Seo } from '../common/seo/Seo';

export const ConcessionsPage: FunctionComponent = () => {
    const concessionLocation = useConcessionsLocation();
    const signupLink = useConcessionSignupLink();
    const contactLink = useDirectorOfConcessionsMailLink();
    return (
        <>
            <Seo
                title={'Concessions'}
                description={'Bondurant Soccer Club concession stand info'}
                route={'concessions'}
            />
            <GappedStack padded>
                <Title>Concessions Info</Title>

                <TreatTickets location={concessionLocation} />
                <ConcessionStandDutyAndSignup
                    signupLink={signupLink}
                    contactLink={contactLink}
                />
            </GappedStack>
        </>
    );
};
