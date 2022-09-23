import React, { FunctionComponent } from 'react';
import {
    Paragraph,
    Section,
    SectionTitle,
    SmartLink
} from '../common/components';
import { LinkData } from '../common/state';

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
