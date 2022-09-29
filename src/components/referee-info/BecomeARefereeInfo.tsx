import { FunctionComponent } from 'react';
import { Section } from '../../common/components/Section';
import { LinkData } from '../../common/state/models';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Paragraph } from '../../common/components/Paragraph';
import { SmartLink } from '../../common/components/SmartLink';

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
