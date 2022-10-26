import React, { FunctionComponent } from 'react';
import { RegistrationAgeGroups } from './RegistrationAgeGroups';
import { RegistrationInfoWelcome } from './RegistrationInfoWelcome';
import { ScholarshipInfo } from './ScholarshipInfo';
import { RefundPolicy } from './RefundPolicy';
import { RegistrationDates } from './RegistrationDates';
import {
    useCurrentRegistrationSeason,
    useRegistrationDates
} from '../../common/hooks/registration-hooks';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { Seo } from '../../common/seo/Seo';
import { RegisterHereButton } from '../../common/components/RegisterHereButton';

export const RegistrationInfoPage: FunctionComponent = () => {
    const { season, ages } = useCurrentRegistrationSeason();
    const dates = useRegistrationDates();
    return (
        <>
            <Seo
                title={'Registration Info'}
                description={
                    'Sign your child up to play for Bondurant Soccer Club'
                }
                route={'registration-info'}
            />
            <GappedStack padded>
                <Title>Registration Info</Title>

                <RegisterHereButton />

                <RegistrationInfoWelcome />
                <RegistrationDates dates={dates} />
                <RegistrationAgeGroups season={season} ages={ages} />
                <ScholarshipInfo />
                <RefundPolicy />
            </GappedStack>
        </>
    );
};
