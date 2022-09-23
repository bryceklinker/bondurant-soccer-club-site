import React, { FunctionComponent } from 'react';
import {
    CollapsiblePanel,
    Paragraph,
    PlainStack,
    Section,
    SectionTitle
} from '../common/components';
import { AgeRegistrationData, Season } from '../common/state';
import { RegistrationAgesTable } from './RegistrationAgesTable';

export interface RegistrationAgeGroupsProps {
    season: Season;
    ages: Array<AgeRegistrationData>;
}

export const RegistrationAgeGroups: FunctionComponent<
    RegistrationAgeGroupsProps
> = ({ season, ages }) => {
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>Ages and Costs</SectionTitle>}>
                <PlainStack>
                    <Paragraph>
                        All players are grouped by the year of birth, not the
                        school year. For {season.startYear}/{season.endYear}{' '}
                        season, it is:
                    </Paragraph>

                    <RegistrationAgesTable ages={ages} />
                </PlainStack>
            </CollapsiblePanel>
        </Section>
    );
};
