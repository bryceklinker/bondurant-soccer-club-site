import React, { FunctionComponent } from 'react';
import { CollapsiblePanel } from '../common/components/CollapsiblePanel';
import { Section } from '../common/components/Section';
import { Paragraph } from '../common/components/Paragraph';
import { SectionTitle } from '../common/components/SectionTitle';

export const Coaching: FunctionComponent = () => {
    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>Coaching</SectionTitle>}>
                <Paragraph>
                    All coaching is done by parent volunteers who have passed a
                    background check. We always have a need for more help. Since
                    you'll be at the game anyway, please consider helping out
                    your player and volunteering to coach their team.
                </Paragraph>
            </CollapsiblePanel>
        </Section>
    );
};
