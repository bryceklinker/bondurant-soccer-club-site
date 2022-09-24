import { FC } from 'react';
import { BoardProceduresForCodeOfConductViolations } from './BoardProceduresForCodeOfConductViolations';
import { Section } from '../common/components/Section';
import { CollapsiblePanel } from '../common/components/CollapsiblePanel';
import { SectionTitle } from '../common/components/SectionTitle';
import { SubTitle } from '../common/components/SubTitle';
import { Paragraph } from '../common/components/Paragraph';
import { ParagraphList } from '../common/components/ParagraphList';

export type PlayerCodeOfConductProps = {
    expectations: Array<string>;
    reportingSteps: Array<string>;
    punishments: Array<string>;
};

export const PlayerCodeOfConduct: FC<PlayerCodeOfConductProps> = ({
    expectations,
    punishments,
    reportingSteps
}) => {
    return (
        <Section shadow padded>
            <CollapsiblePanel
                title={<SectionTitle>Player Code of Conduct</SectionTitle>}>
                <SubTitle>
                    Bondurant Soccer Club Player Code of Conduct
                </SubTitle>
                <Paragraph>
                    I agree to live up to my role as a player for the Bondurant
                    Soccer Club by following the Club’s Code of Conduct as
                    follows:
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
