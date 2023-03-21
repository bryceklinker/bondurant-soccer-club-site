import { FC } from 'react';
import { Section } from '../../common/components/Section';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Paragraph } from '../../common/components/Paragraph';
import { LinkButton } from '../../common/components/LinkButton';
import { useMeetingMinutesLink } from './hooks';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';

export const MeetingMinutes: FC = () => {
    const link = useMeetingMinutesLink();
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>Board Meeting Minutes</SectionTitle>}>
                <Paragraph>
                    The board keeps minutes from each meeting. Those minutes are
                    kept in a Google Drive, which can be accessed using the link
                    below.
                </Paragraph>

                <LinkButton href={link}>
                    Google Drive Meeting Minutes
                </LinkButton>
            </CollapsiblePanel>
        </Section>
    );
};
