import React, { FunctionComponent } from 'react';
import { RegistrationAgeGroups } from './RegistrationAgeGroups';
import { RegistrationInfoWelcome } from './RegistrationInfoWelcome';
import { ScholarshipInfo } from './ScholarshipInfo';
import { RefundPolicy } from './RefundPolicy';
import { RegistrationDates } from './RegistrationDates';
import { LinkButton } from '../../common/components/LinkButton';
import {
    useCurrentRegistrationSeason,
    useRegistrationDates,
    useRegistrationLink
} from '../../common/hooks/registration-hooks';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { Seo } from '../../common/seo/Seo';

export const RegistrationInfoPage: FunctionComponent = () => {
    const { season, ages } = useCurrentRegistrationSeason();
    const dates = useRegistrationDates();
    const registrationLink = useRegistrationLink();
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

                <LinkButton
                    external
                    className={'text-blue-700'}
                    href={registrationLink.url}>
                    {registrationLink.text}
                </LinkButton>

                <RegistrationDates dates={dates} />
                <RegistrationInfoWelcome />
                <RegistrationAgeGroups season={season} ages={ages} />
                <ScholarshipInfo />
                <RefundPolicy />
            </GappedStack>
        </>
    );
};
