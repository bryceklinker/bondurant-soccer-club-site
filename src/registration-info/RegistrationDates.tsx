import React, { FunctionComponent } from 'react';
import {
    CollapsiblePanel,
    Paragraph,
    PlainStack,
    Section,
    SectionTitle,
    SubTitle
} from '../common/components';
import { RegistrationDatesData } from '../common/state';
import { Dates } from '../common/extensions';

export interface RegistrationDateProps {
    date: RegistrationDatesData;
}

export const RegistrationDate: FunctionComponent<RegistrationDateProps> = ({
    date
}) => {
    return (
        <PlainStack>
            <SubTitle>{date.season}</SubTitle>
            <PlainStack padding={'0 1em'}>
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
