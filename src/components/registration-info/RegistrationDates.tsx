import { FunctionComponent } from 'react';
import { PlainStack } from '../../common/components/PlainStack';
import { SubTitle } from '../../common/components/SubTitle';
import { Paragraph } from '../../common/components/Paragraph';
import { Dates } from '../../common/extensions/dates';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Section } from '../../common/components/Section';
import { RegistrationDatesData } from '../../common/state/registration-dates-data';

export interface RegistrationDateProps {
    date: RegistrationDatesData;
}

export const RegistrationDate: FunctionComponent<RegistrationDateProps> = ({
    date
}) => {
    return (
        <PlainStack>
            <SubTitle>{date.season}</SubTitle>
            <PlainStack className={'py-0 px-4'}>
                <Paragraph>
                    Early Bird: {Dates.formatDateRange(date.earlyBird)}
                </Paragraph>
                <Paragraph>
                    Regular: {Dates.formatDateRange(date.regular)}
                </Paragraph>
                <Paragraph>Late: {Dates.formatDateRange(date.late)}</Paragraph>
                <Paragraph>
                    Cutoff Date: {Dates.formatDate(date.cutoff)}
                </Paragraph>
            </PlainStack>
        </PlainStack>
    );
};

export interface RegistrationDatesProps {
    dates: Array<RegistrationDatesData>;
}

export const RegistrationDates: FunctionComponent<RegistrationDatesProps> = ({
    dates
}) => {
    const registrationDates = dates.map((d, i) => (
        <RegistrationDate key={i} date={d} />
    ));
    return (
        <Section padded shadow>
            <CollapsiblePanel
                expanded
                title={<SectionTitle>Registration Dates</SectionTitle>}>
                {registrationDates}
            </CollapsiblePanel>
        </Section>
    );
};
