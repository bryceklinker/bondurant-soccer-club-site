import {Stack} from '@fluentui/react';
import React, {FunctionComponent} from 'react';
import {CollapsiblePanel, ExternalLink, Paragraph, Section, SectionTitle} from '../../common';

export const U9AndUpSchedules: FunctionComponent = () => {
    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>U9 and Up Schedules</SectionTitle>}>
                <Stack>
                    <Paragraph>
                        U9 and up schedules can be accessed <ExternalLink
                        href={'https://iowasoccer.demosphere-secure.com/schedules/click-here-for-isl-rec-central-schedules'}>here</ExternalLink>
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
