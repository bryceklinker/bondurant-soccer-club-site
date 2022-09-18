import {Stack} from '@fluentui/react';
import {FunctionComponent} from 'react';
import {CollapsiblePanel, ExternalLink, LinkData, Paragraph, Section, SectionTitle} from '../common';

export interface U9AndUpSchedulesProps {
    link: LinkData;
}

export const U9AndUpSchedules: FunctionComponent<U9AndUpSchedulesProps> = ({link}) => {
    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>U9 and Up Schedules</SectionTitle>}>
                <Stack>
                    <Paragraph>
                        U9 and up schedules can be accessed <ExternalLink href={link.url}>{link.text}</ExternalLink>
                    </Paragraph>
                    <Paragraph>
                        Click the age group, click the Bondurant Soccer Club team name, and finally, scroll to the
                        bottom of the page where you can view the schedule.
                    </Paragraph>
                </Stack>
            </CollapsiblePanel>
        </Section>
    );
};
