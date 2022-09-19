import {FunctionComponent} from 'react';
import {CollapsiblePanel, Paragraph, ParagraphList, Section, SectionTitle, SubTitle} from '../common';
import {BoardProceduresForCodeOfConductViolations} from './BoardProceduresForCodeOfConductViolations';

export interface CoachingCodeOfConductProps {
    expectations: Array<string>;
    reportingSteps: Array<string>;
    punishments: Array<string>;
}

export const CoachingCodeOfConduct: FunctionComponent<CoachingCodeOfConductProps> = ({
                                                                                         expectations,
                                                                                         reportingSteps,
                                                                                         punishments
                                                                                     }) => {
    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>Coaching Code of Conduct</SectionTitle>}>
                <SubTitle>Bondurant Soccer Club Coach Code of Conduct</SubTitle>
                <Paragraph>
                    I agree to live up to my role as a parent of a Coach for the Bondurant Soccer Club by following the
                    Club’s Code of Conduct as follows:
                </Paragraph>

                <ParagraphList numbered items={expectations}/>

                <BoardProceduresForCodeOfConductViolations reportingSteps={reportingSteps} punishments={punishments}/>
            </CollapsiblePanel>
        </Section>
    );
};


