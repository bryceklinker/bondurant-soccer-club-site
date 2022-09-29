import { FC } from 'react';
import { BoardProceduresForCodeOfConductViolations } from './BoardProceduresForCodeOfConductViolations';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { SubTitle } from '../../common/components/SubTitle';
import { Paragraph } from '../../common/components/Paragraph';
import { ParagraphList } from '../../common/components/ParagraphList';
import { Section } from '../../common/components/Section';

export type ParentCodeOfConductProps = {
    expectations: Array<string>;
    reportingSteps: Array<string>;
    punishments: Array<string>;
};

export const ParentCodeOfConduct: FC<ParentCodeOfConductProps> = ({
    expectations,
    punishments,
    reportingSteps
}) => {
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>Parent Code of Conduct</SectionTitle>}>
                <SubTitle>
                    Bondurant Soccer Club Parent Code of Conduct
                </SubTitle>
                <Paragraph>
                    I agree to live up to my role as a parent of a player for
                    the Bondurant Soccer Club by following the Club’s Code of
                    Conduct as follows:
                </Paragraph>
                <ParagraphList numbered items={expectations} />

                <BoardProceduresForCodeOfConductViolations
                    reportingSteps={reportingSteps}
                    punishments={punishments}
                />
            </CollapsiblePanel>
        </Section>
    );
};
