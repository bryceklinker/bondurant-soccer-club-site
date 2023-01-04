import React, { FunctionComponent } from 'react';
import { RegistrationAgesTable } from './RegistrationAgesTable';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { PlainStack } from '../../common/components/PlainStack';
import { Paragraph } from '../../common/components/Paragraph';
import { Season } from '../../common/state/season';
import { AgeRegistrationData } from '../../common/state/age-registration-data';

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
