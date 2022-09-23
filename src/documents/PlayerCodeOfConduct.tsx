import { FC } from 'react';
import {
    CollapsiblePanel,
    Paragraph,
    ParagraphList,
    Section,
    SectionTitle,
    SubTitle
} from '../common/components';
import { BoardProceduresForCodeOfConductViolations } from './BoardProceduresForCodeOfConductViolations';

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
