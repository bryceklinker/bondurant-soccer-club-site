import {FunctionComponent} from 'react';
import {Paragraph, ParagraphList, SubTitle} from '../common';

export interface BoardProceduresForCodeOfConductViolationsProps {
    reportingSteps: Array<string>;
    punishments: Array<string>;
}

export const BoardProceduresForCodeOfConductViolations: FunctionComponent<BoardProceduresForCodeOfConductViolationsProps> = ({
                                                                                                                                 punishments,
                                                                                                                                 reportingSteps
                                                                                                                             }) => {
    return (
        <>
            <SubTitle>Bondurant Soccer Board procedures for dealing with violations of the Code of Conduct</SubTitle>
            <Paragraph>
                Any reports from referees, opposing coaches, players, or parents regarding violations of the BSC Code of
                Conduct officially filed with the Board will be handled as follows:
            </Paragraph>
            <ParagraphList numbered items={reportingSteps}/>
            <Paragraph>
                Based on the nature and severity of the offense, and depending on whether this represents a repeat
                offense, disciplinary actions may range from:
            </Paragraph>
            <ParagraphList items={punishments}/>
        </>
    );
};
