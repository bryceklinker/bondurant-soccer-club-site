import React, {FunctionComponent} from 'react';
import {BoardMemberData} from '../state';
import {Section, SubTitle, Paragraph, GappedStack} from '../../common';

export interface BoardMemberProps {
    member: BoardMemberData;
}

export const BoardMember: FunctionComponent<BoardMemberProps> = ({member}) => {
    return (
        <Section shadow className={'padded-content'}>
            <SubTitle>{member.role}</SubTitle>
            <Paragraph>{member.name}</Paragraph>
            <a href={`mailto:${member.email}`}>Email</a>
        </Section>
    );
};

export interface BoardMembersProps {
    members: Array<BoardMemberData>;
}

export const BoardMembers: FunctionComponent<BoardMembersProps> = ({members}) => {
    const items = members.map((m, i) => <BoardMember key={i} member={m}/>);

    return (
        <GappedStack>
            {items}
        </GappedStack>
    );
};
