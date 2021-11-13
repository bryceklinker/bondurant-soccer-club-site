import React, {FunctionComponent} from 'react';
import {CollapsiblePanel, ExternalLink, LinkData, Paragraph, Section, SectionTitle} from '../common';

export interface CurrentNeedsProps {
    boardMembersEmailLink: LinkData;
}

export const CurrentNeeds: FunctionComponent<CurrentNeedsProps> = ({boardMembersEmailLink}) => {
    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>Current Needs</SectionTitle>}>
                <Paragraph>
                    We are always looking for support in order to maintain our fields and do all that we can to serve as
                    many players as possible. Current needs include: <br/>
                    - Upkeep of fields, including the new fields at the Bondurant Sports complex<br/>
                    - Upkeep of goals/nets at the various game and practice fields<br/>
                    - New goals/nets for the Bondurant Regional Sports complex<br/>
                    - Building of storage shed and indoor restroom facilities at the new fields<br/>
                </Paragraph>
                <Paragraph>
                    If you have ideas that can help to support the club, please contact a <ExternalLink
                    href={boardMembersEmailLink.url}>{boardMembersEmailLink.text}</ExternalLink>. We appreciate
                    all that you do for the kids!
                </Paragraph>
            </CollapsiblePanel>
        </Section>
    );
};
