import React, { FunctionComponent } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { PlainStack } from '../../common/components/PlainStack';
import { Paragraph } from '../../common/components/Paragraph';
import { ExternalLink } from '../../common/components/ExternalLink';
import { Flex } from '../../common/layout/Flex';
import { LinkData } from '../../common/state/link-data';

export interface ConcessionStandDutyAndSignupProps {
    signupLink: LinkData;
    contactLink: LinkData;
}

export const ConcessionStandDutyAndSignup: FunctionComponent<
    ConcessionStandDutyAndSignupProps
> = ({ signupLink, contactLink }) => {
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={
                    <SectionTitle>
                        Concession Stand Duty and Signup
                    </SectionTitle>
                }>
                <Flex className={'flex-col md:flex-row'}>
                    <Flex>
                        <StaticImage
                            alt={'Concession Hours'}
                            src={'../../assets/concessions_hours.png'}
                        />
                    </Flex>
                    <Flex className={'flex-col gap-4'}>
                        <Paragraph>
                            Click here to schedule your volunteering spot for
                            the Fall 2021 Concession Season:{' '}
                            <ExternalLink href={signupLink.url}>
                                {signupLink.text}
                            </ExternalLink>
                        </Paragraph>

                        <Paragraph>
                            The Concession Stand at the Bondurant Soccer Fields
                            is staffed by volunteers and the profits are used to
                            support the fields, players, and needs of the club.
                            Parents that aren't coaching are expected to help
                            out at the concession stand. If you have any
                            questions about this, please contact our{' '}
                            <ExternalLink href={contactLink.url}>
                                {contactLink.text}
                            </ExternalLink>
                        </Paragraph>
                    </Flex>
                </Flex>
            </CollapsiblePanel>
        </Section>
    );
};