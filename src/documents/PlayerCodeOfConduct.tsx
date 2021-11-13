import React, {FunctionComponent} from 'react';
import {CollapsiblePanel, Paragraph, ParagraphList, Section, SectionTitle, SubTitle} from '../common';
import {BoardProceduresForCodeOfConductViolations} from './BoardProceduresForCodeOfConductViolations';

export interface PlayerCodeOfConductProps {
    expectations: Array<string>;
    reportingSteps: Array<string>;
    punishments: Array<string>;
}

export const PlayerCodeOfConduct: FunctionComponent<PlayerCodeOfConductProps> = ({
                                                                                     expectations,
                                                                                     punishments,
                                                                                     reportingSteps
                                                                                 }) => {
    return (
        <Section shadow padded>
            <CollapsiblePanel title={<SectionTitle>Player Code of Conduct</SectionTitle>}>
                <SubTitle>Bondurant Soccer Club Player Code of Conduct</SubTitle>
                <Paragraph>
                    I agree to live up to my role as a player for the Bondurant Soccer Club by following the Club’s Code
                    of Conduct as follows:
                </Paragraph>
                <ParagraphList numbered items={expectations}/>

                <BoardProceduresForCodeOfConductViolations reportingSteps={reportingSteps} punishments={punishments}/>
            </CollapsiblePanel>
        </Section>
    );
};
