import { FC } from 'react';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Paragraph } from '../../common/components/Paragraph';
import { LinkButton } from '../../common/components/LinkButton';
import { Section } from '../../common/components/Section';
import { useMeetingAgendasLink } from './hooks';

export const MeetingAgendas: FC = () => {
    const link = useMeetingAgendasLink();
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>Board Meeting Agendas</SectionTitle>}>
                <Paragraph>
                    The board keeps agendas for each meeting. These agendas are
                    kept in a Google Drive, which can be accessed using the link
                    below.
                </Paragraph>

                <LinkButton href={link}>
                    Google Drive Meeting Agendas
                </LinkButton>
            </CollapsiblePanel>
        </Section>
    );
};
