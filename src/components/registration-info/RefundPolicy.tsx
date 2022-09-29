import { FunctionComponent } from 'react';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { Section } from '../../common/components/Section';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Paragraph } from '../../common/components/Paragraph';

export const RefundPolicy: FunctionComponent = () => {
    return (
        <Section shadow padded>
            <CollapsiblePanel
                title={<SectionTitle>Refund Policy</SectionTitle>}>
                <Paragraph>
                    For those individuals requesting a refund prior to our
                    registration deadline, reimbursement of full registration
                    fees minus any fees incurred by the club will be provided.
                </Paragraph>

                <Paragraph>
                    For those individuals requesting a refund after the
                    registration deadline but before season play begins,
                    reimbursement of registration fees minus a minimum of $10 to
                    defray costs already incurred by the soccer club will be
                    provided.
                </Paragraph>

                <Paragraph>
                    For those individuals requesting a refund after the season
                    begins, reimbursement will be provided at the Bondurant
                    Soccer Club Board’s discretion. The maximum refund provided
                    would be the registration fees minus a minimum of $20 to
                    defray costs already incurred by the soccer club.
                </Paragraph>
            </CollapsiblePanel>
        </Section>
    );
};
