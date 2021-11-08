import React, {FunctionComponent} from 'react';
import {GappedStack, Paragraph, Section, SectionTitle} from '../../common';
import {RegistrationAgesTable} from './RegistrationAgesTable';
import {useRegistrationSeason} from '../hooks/use-registration-season';

export const RegistrationInfoPage: FunctionComponent = () => {
    const {season, ages} = useRegistrationSeason();
    return (
        <GappedStack padded>
            <Section padded shadow>
                <SectionTitle>Registration Info</SectionTitle>

                <Paragraph>
                    All players are grouped by the year of birth, not the school year.
                    For {season.startYear}/{season.endYear} season, it is:
                </Paragraph>

                <RegistrationAgesTable ages={ages}/>
            </Section>
        </GappedStack>
    );
};
