import React, { FunctionComponent } from 'react';
import { CollapsiblePanel, Paragraph, Section, SectionTitle } from '../common';

export const ScholarshipInfo: FunctionComponent = () => {
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>Scholarship Information</SectionTitle>}>
                <Paragraph>
                    The Bondurant Soccer Club has made modifications to its
                    scholarship program. As in most organizations, volunteer
                    hours fall below our yearly needs. To help alleviate this
                    deficiency, we are asking that a parent/guardian repay some
                    of our sponsorship of your child with a minimum of ten hours
                    of volunteer time to our club. This volunteer time can be
                    worked either in the concession stand or field maintenance
                    area. Many of the hours can be fulfilled while your child is
                    practicing during the week. Many clubs in the area have
                    switched to this type of scholarship program as it is
                    equally beneficial to both parties and is a benefit to the
                    entire soccer organization.
                </Paragraph>
            </CollapsiblePanel>
        </Section>
    );
};
