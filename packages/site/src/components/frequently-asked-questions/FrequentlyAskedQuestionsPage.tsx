import { FC } from 'react';
import { GappedStack } from '../../common/components/GappedStack';
import { SectionTitle } from '../../common/components/SectionTitle';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { Section } from '../../common/components/Section';
import { Paragraph } from '../../common/components/Paragraph';
import { SmartLink } from '../../common/components/SmartLink';
import { SubTitle } from '../../common/components/SubTitle';
import { PlainStack } from '../../common/components/PlainStack';
import { Seo } from '../../common/seo/Seo';
import {
    useCoachFrequentlyAskedQuestions,
    useFrequentlyAskedQuestions,
    useRegistrationFrequentlyAskedQuestions
} from './hook';
import { FrequentlyAskedQuestionData } from '../../common/state/frequently-asked-question-data';

export const FrequentlyAskedQuestionsPage: FC = () => {
    const frequentlyAskedQuestions = useFrequentlyAskedQuestions().map(
        (q, index) => <FrequentlyAskedQuestion key={index} question={q} />
    );

    const registrationFaq = useRegistrationFrequentlyAskedQuestions().map(
        (q, index) => <FrequentlyAskedQuestion key={index} question={q} />
    );

    const coachFaq = useCoachFrequentlyAskedQuestions().map((q, index) => (
        <FrequentlyAskedQuestion key={index} question={q} />
    ));
    return (
        <GappedStack padded>
            <Section shadow padded>
                <CollapsiblePanel
                    title={
                        <SectionTitle>Frequently Asked Questions</SectionTitle>
                    }>
                    {frequentlyAskedQuestions}
                </CollapsiblePanel>
            </Section>
            <Section shadow padded>
                <CollapsiblePanel
                    title={
                        <SectionTitle>
                            Registration Frequently Asked Questions
                        </SectionTitle>
                    }>
                    {registrationFaq}
                </CollapsiblePanel>
            </Section>
            <Section shadow padded>
                <CollapsiblePanel
                    title={
                        <SectionTitle>
                            Coach Frequently Asked Questions
                        </SectionTitle>
                    }>
                    {coachFaq}
                </CollapsiblePanel>
            </Section>
        </GappedStack>
    );
};

export interface FrequentlyAskedQuestionProps {
    question: FrequentlyAskedQuestionData;
}

export const FrequentlyAskedQuestion: FC<FrequentlyAskedQuestionProps> = ({
    question
}) => {
    const links = (question.links || []).map((l, index) => (
        <Paragraph key={index} indent>
            <SmartLink link={l} />
        </Paragraph>
    ));
    return (
        <PlainStack>
            <SubTitle>{question.question}</SubTitle>
            <Paragraph indent>{question.answer}</Paragraph>
            {links}
        </PlainStack>
    );
};
