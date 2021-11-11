import React, {FunctionComponent} from 'react';
import {BoardMember} from './BoardMember';
import {BoardMemberData, CollapsiblePanel, Section, SectionTitle} from '../common';

interface BoardMemberGroupProps {
    name: string;
    members: Array<BoardMemberData>;
}

export const BoardMemberGroup: FunctionComponent<BoardMemberGroupProps> = ({name, members}) => {
    const items = members.map((m, i) => <BoardMember key={i} member={m}/>);
    return (
        <Section shadow padded>
            <CollapsiblePanel title={<SectionTitle>{name}</SectionTitle>}>
                {items}
            </CollapsiblePanel>
        </Section>
    );
};
