import React, {FunctionComponent} from 'react';
import {CollapsiblePanel, Paragraph, Section, SectionTitle} from '../common';

export const Coaching: FunctionComponent = () => {
    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>Coaching</SectionTitle>}>
                <Paragraph>
                    All coaching is done by parent volunteers who have passed a background check. We always have a
                    need for more help. Since you'll be at the game anyway, please consider helping out your player
                    and volunteering to coach their team.
                </Paragraph>
            </CollapsiblePanel>
        </Section>
    )
}
