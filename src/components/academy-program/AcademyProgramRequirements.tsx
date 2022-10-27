import { FC } from 'react';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { useAcademyAdditionalRequirements } from '../../common/hooks/academy-program-hooks';
import { Paragraph } from '../../common/components/Paragraph';

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
