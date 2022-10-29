import { FC } from 'react';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Paragraph } from '../../common/components/Paragraph';
import { useAcademyAdditionalRequirements } from './hooks';

export const AcademyProgramRequirements: FC = () => {
    const requirements = useAcademyAdditionalRequirements();
    const items = requirements.map(r => (
        <li>
            <Paragraph>{r}</Paragraph>
        </li>
    ));
    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>Requirements</SectionTitle>}>
                <ul className={'list-disc px-4'}>{items}</ul>
            </CollapsiblePanel>
        </Section>
    );
};
