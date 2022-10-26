import { FC } from 'react';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { Section } from '../../common/components/Section';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Paragraph } from '../../common/components/Paragraph';
import { useAcademyProgramGoals } from '../../common/hooks/academy-program-hooks';

export const AcademyProgramGoals: FC = () => {
    const goals = useAcademyProgramGoals();
    const items = goals.map(goal => (
        <li>
            <Paragraph>
                <>
                    <span className={'font-bold'}>{goal.title}: </span>
                    {goal.description}
                </>
            </Paragraph>
        </li>
    ));
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={
                    <SectionTitle>
                        Goals of the BSC Academy Program
                    </SectionTitle>
                }>
                <ul className={'list-disc px-4'}>{items}</ul>
            </CollapsiblePanel>
        </Section>
    );
};
