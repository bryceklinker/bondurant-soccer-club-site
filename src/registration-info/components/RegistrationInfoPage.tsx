import React, {FunctionComponent} from 'react';
import {GappedStack, Title} from '../../common';
import {useRegistrationDates, useRegistrationSeason} from '../hooks';
import {RegistrationAgeGroups} from './RegistrationAgeGroups';
import {RegistrationInfoWelcome} from './RegistrationInfoWelcome';
import {ScholarshipInfo} from './ScholarshipInfo';
import {RefundPolicy} from './RefundPolicy';
import {RegistrationDates} from './RegistrationDates';

export const RegistrationInfoPage: FunctionComponent = () => {
    const {season, ages} = useRegistrationSeason();
    const dates = useRegistrationDates();
    return (
        <GappedStack padded flex>
            <Title>Registration Info</Title>

            <RegistrationDates dates={dates} />
            <RegistrationInfoWelcome />
            <RegistrationAgeGroups season={season} ages={ages} />
            <ScholarshipInfo />
            <RefundPolicy />
        </GappedStack>
    );
};
