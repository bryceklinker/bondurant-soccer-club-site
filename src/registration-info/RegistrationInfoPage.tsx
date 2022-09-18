impor, {FunctionComponent} from 'react';
import {GappedStack, Title, useRegistrationDates, useRegistrationLink, useCurrentRegistrationSeason} from '../common';
import {RegistrationAgeGroups} from './RegistrationAgeGroups';
import {RegistrationInfoWelcome} from './RegistrationInfoWelcome';
import {ScholarshipInfo} from './ScholarshipInfo';
import {RefundPolicy} from './RefundPolicy';
import {RegistrationDates} from './RegistrationDates';
import {LinkButton} from '../common/components/LinkButton';

export const RegistrationInfoPage: FunctionComponent = () => {
    const {season, ages} = useCurrentRegistrationSeason();
    const dates = useRegistrationDates();
    const registrationLink = useRegistrationLink();
    return (
        <GappedStack padded flex>
            <Title>Registration Info</Title>

            <LinkButton external
                        color={'blue'}
                        href={registrationLink.url}>
                {registrationLink.text}
            </LinkButton>

            <RegistrationDates dates={dates} />
            <RegistrationInfoWelcome />
            <RegistrationAgeGroups season={season} ages={ages} />
            <ScholarshipInfo />
            <RefundPolicy />
        </GappedStack>
    );
};
