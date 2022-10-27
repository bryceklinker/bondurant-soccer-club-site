import { FC } from 'react';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Section } from '../../common/components/Section';
import { useAcademyLeagueFormatRules } from '../../common/hooks/academy-program-hooks';
import { Paragraph } from '../../common/components/Paragraph';

export const AcademyProgramLeagueFormat: FC = () => {
    const rules = useAcademyLeagueFormatRules();
    const items = rules.map(r => (
        <li>
            <Paragraph>{r}</Paragraph>
        </li>
    ));
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>League Format</SectionTitle>}>
                <ul className={'list-disc px-4'}>{items}</ul>
            </CollapsiblePanel>
        </Section>
    );
};
