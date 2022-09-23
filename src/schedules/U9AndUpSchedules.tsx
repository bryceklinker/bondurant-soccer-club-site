import React, { FunctionComponent } from 'react';
import {
    CollapsiblePanel,
    ExternalLink,
    Paragraph,
    Section,
    SectionTitle
} from '../common/components';
import { ColumnFlex } from '../common/layout';
import { LinkData } from '../common/state';

export interface U9AndUpSchedulesProps {
    link: LinkData;
}

export const U9AndUpSchedules: FunctionComponent<U9AndUpSchedulesProps> = ({
    link
}) => {
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>U9 and Up Schedules</SectionTitle>}>
                <ColumnFlex>
                    <Paragraph>
                        U9 and up schedules can be accessed{' '}
                        <ExternalLink href={link.url}>{link.text}</ExternalLink>
                    </Paragraph>
                    <Paragraph>
                        Click the age group, click the Bondurant Soccer Club
                        team name, and finally, scroll to the bottom of the page
                        where you can view the schedule.
                    </Paragraph>
                </ColumnFlex>
            </CollapsiblePanel>
        </Section>
    );
};
