import React, {FunctionComponent} from 'react';
import {CollapsiblePanel, Paragraph, Section, SectionTitle} from '../common';

export const RequiredEquipment: FunctionComponent = () => {
    return (
        <Section shadow padded>
            <CollapsiblePanel title={<SectionTitle>Required Equipment</SectionTitle>}>
                <Paragraph>
                    A team shirt will be provided to each player and coach on the first day. This shirt should be
                    worn at each game. All players must wear shin guards and have a ball. It is recommended that
                    players wear cleats, but not required. There are extras available of all equipment at the
                    concession stand. Stop by if you need something and see what may work for you.
                </Paragraph>
            </CollapsiblePanel>
        </Section>
    )
}
