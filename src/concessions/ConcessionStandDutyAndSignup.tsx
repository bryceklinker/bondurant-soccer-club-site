import React, { FunctionComponent } from 'react';
import {
    CollapsiblePanel,
    ExternalLink,
    Paragraph,
    PlainStack,
    Section,
    SectionTitle
} from '../common/components';
import { StaticImage } from 'gatsby-plugin-image';
import { LinkData } from '../common/state';

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
                <PlainStack horizontal>
                    <PlainStack className={'flex-half'}>
                        <StaticImage
                            alt={'Concession Hours'}
                            src={'../assets/concessions_hours.png'}
                        />
                    </PlainStack>
                    <PlainStack className={'flex-half'}>
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
                    </PlainStack>
                </PlainStack>
            </CollapsiblePanel>
        </Section>
    );
};
