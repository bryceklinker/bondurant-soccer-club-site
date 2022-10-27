import { FC } from 'react';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { useAcademyTeamFormationRules } from '../../common/hooks/academy-program-hooks';
import { Paragraph } from '../../common/components/Paragraph';

export const AcademyProgramTeamFormation: FC = () => {
    const teamFormation = useAcademyTeamFormationRules();
    const items = teamFormation.map(r => (
        <li>
            <Paragraph>{r}</Paragraph>
        </li>
    ));
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>Team Formation</SectionTitle>}>
                <ul className={'list-disc px-4'}>{items}</ul>
            </CollapsiblePanel>
        </Section>
    );
};