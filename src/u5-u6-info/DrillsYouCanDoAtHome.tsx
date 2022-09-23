import React, { FunctionComponent } from 'react';
import { CollapsiblePanel } from '../common/components/CollapsiblePanel';
import { ExternalLinks } from '../common/components/ExternalLinks';
import { LinkData } from '../common/state/models';
import { SectionTitle } from '../common/components/SectionTitle';
import { Paragraph } from '../common/components/Paragraph';
import { Section } from '../common/components/Section';

export interface DrillsYouCanDoAtHomeProps {
    drillLinks: Array<LinkData>;
}

export const DrillsYouCanDoAtHome: FunctionComponent<
    DrillsYouCanDoAtHomeProps
> = ({ drillLinks }) => {
    return (
        <Section shadow padded>
            <CollapsiblePanel
                title={<SectionTitle>Drills you can do at home</SectionTitle>}>
                <Paragraph>
                    Practicing with your player is a great way to instill the
                    love of the game and help them learn. Here are some that are
                    favorites You can also search 'U6 drills' and there are
                    multiple sites that can help. Some even include videos!
                </Paragraph>
                <Paragraph italic>Red Light, Green Light</Paragraph>
                <Paragraph italic>Racecar</Paragraph>
                <Paragraph italic>Ouch!</Paragraph>
                <Paragraph italic>Coach Says</Paragraph>
                <Paragraph>
                    <ExternalLinks links={drillLinks} />
                </Paragraph>
            </CollapsiblePanel>
        </Section>
    );
};
