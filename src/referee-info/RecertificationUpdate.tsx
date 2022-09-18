impor, {FunctionComponent} from 'react';
import {
    CollapsiblePanel,
    LinkData,
    Numbers,
    Paragraph,
    ParagraphList,
    Section,
    SectionTitle,
    SmartLink
} from '../common';

export interface RecertificationUpdateProps {
    steps: Array<string>;
    cost: number;
    requiredTrainingLink: LinkData;
}

export const RecertificationUpdate: FunctionComponent<RecertificationUpdateProps> = ({
                                                                                         cost,
                                                                                         steps,
                                                                                         requiredTrainingLink
                                                                                     }) => {
    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>Recertification Update</SectionTitle>}>
                <Paragraph>
                    Referees who were registered as a Grade 9, 8, or 7 in 2019 will register as a Grassroots Referee in
                    2020.
                </Paragraph>

                <ParagraphList numbered items={steps}/>

                <Paragraph indent>
                    <SmartLink link={requiredTrainingLink}/>
                </Paragraph>

                <Paragraph>
                    IMPORTANT: US Soccer developed the Safe Soccer framework within which all participants in the soccer
                    community, including referees, will play an active role in creating an environment free from
                    emotional, physical and sexual abuse. It is a comprehensive program of policies / process,
                    screening, education / training, reporting, monitoring and enforcement designed to help you detect
                    and report abuse, respond to it, and prevent future occurrences.
                </Paragraph>

                <Paragraph>
                    The first 4 requirements above will appear under the "Assignments" tab for an IA - Online 2019-20
                    Grassroots Referee Recertification Module to reside in the Learning Center. You will pay
                    your {Numbers.formatCurrency(cost)} registration fee online by credit card when you signup for the
                    module. All 4 assignments plus a Background Check must be completed in order to be registered for
                    2020.
                </Paragraph>
            </CollapsiblePanel>
        </Section>
    );
};
