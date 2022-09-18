import {FunctionComponent} from 'react';
import {
    CollapsiblePanel,
    FrequentlyAskedQuestionData,
    GappedStack,
    Paragraph,
    PlainStack,
    Section, SectionTitle,
    SubTitle, useCoachFrequentlyAskedQuestions,
    useFrequentlyAskedQuestions, useRegistrationFrequentlyAskedQuestions
} from '../common';
import {SmartLink} from '../common/components/SmartLink';

export const FrequentlyAskedQuestionsPage: FunctionComponent = () => {
    const frequentlyAskedQuestions = useFrequentlyAskedQuestions()
        .map((q, index) => <FrequentlyAskedQuestion key={index} question={q}/>);

    const registrationFaq = useRegistrationFrequentlyAskedQuestions()
        .map((q, index) => <FrequentlyAskedQuestion key={index} question={q} />);

    const coachFaq = useCoachFrequentlyAskedQuestions()
        .map((q, index) => <FrequentlyAskedQuestion key={index} question={q} />)
    return (
        <GappedStack padded flex>
            <Section shadow padded>
                <CollapsiblePanel title={<SectionTitle>Frequently Asked Questions</SectionTitle>}>
                    {frequentlyAskedQuestions}
                </CollapsiblePanel>
            </Section>
            <Section shadow padded>
                <CollapsiblePanel title={<SectionTitle>Registration Frequently Asked Questions</SectionTitle>}>
                    {registrationFaq}
                </CollapsiblePanel>
            </Section>
            <Section shadow padded>
                <CollapsiblePanel title={<SectionTitle>Coach Frequently Asked Questions</SectionTitle>}>
                    {coachFaq}
                </CollapsiblePanel>
            </Section>
        </GappedStack>
    );
};

export interface FrequentlyAskedQuestionProps {
    question: FrequentlyAskedQuestionData;
}

export const FrequentlyAskedQuestion: FunctionComponent<FrequentlyAskedQuestionProps> = ({question}) => {
    const links = (question.links || [])
        .map((l, index) => <Paragraph key={index} indent><SmartLink link={l}/></Paragraph>);
    return (
        <PlainStack>
            <SubTitle>{question.question}</SubTitle>
            <Paragraph indent>
                {question.answer}
            </Paragraph>
            {links}
        </PlainStack>
    );
};
