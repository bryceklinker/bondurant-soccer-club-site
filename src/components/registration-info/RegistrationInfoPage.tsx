import React, { FunctionComponent } from 'react';
import { RegistrationAgeGroups } from './RegistrationAgeGroups';
import { RegistrationInfoWelcome } from './RegistrationInfoWelcome';
import { ScholarshipInfo } from './ScholarshipInfo';
import { RefundPolicy } from './RefundPolicy';
import { RegistrationDates } from './RegistrationDates';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { Seo } from '../../common/seo/Seo';
import { RegisterHereButton } from '../../common/components/RegisterHereButton';
import { useCurrentRegistrationSeason, useRegistrationDates } from './hooks';

export const RegistrationInfoPage: FunctionComponent = () => {
    const { season, ages } = useCurrentRegistrationSeason();
    const dates = useRegistrationDates();
    return (
        <GappedStack padded>
            <Title>Registration Info</Title>

            <RegisterHereButton />

            <RegistrationInfoWelcome />
            <RegistrationDates dates={dates} />
            <RegistrationAgeGroups season={season} ages={ages} />
            <ScholarshipInfo />
            <RefundPolicy />
        </GappedStack>
    );
};
