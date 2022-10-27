import { FC } from 'react';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';

export const AcademyProgramTeamFormation: FC = () => {
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle></SectionTitle>}></CollapsiblePanel>
        </Section>
    );
};
