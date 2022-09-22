import React, { FunctionComponent } from 'react';
import {
    LinkData,
    Paragraph,
    Section,
    SectionTitle,
    SmartLink
} from '../common';

export interface BecomeARefereeInfoProps {
    contactLink: LinkData;
}

export const BecomeARefereeInfo: FunctionComponent<BecomeARefereeInfoProps> = ({
    contactLink
}) => {
    return (
        <Section padded shadow>
            <SectionTitle>Become A Referee</SectionTitle>
            <Paragraph>
                If you are interested in being a Ref for the Bondurant Soccer
                Club, please contact our <SmartLink link={contactLink} />
            </Paragraph>
        </Section>
    );
};
