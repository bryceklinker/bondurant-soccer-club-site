import React, {FunctionComponent} from 'react';
import {List} from '@fluentui/react';
import {BoardMemberData} from '../state';
import {Section, Title, SubTitle} from '../../common';

export interface BoardMemberProps {
    member: BoardMemberData;
}

export const BoardMember: FunctionComponent<BoardMemberProps> = ({member}) => {
    return (
        <Section>
            <Title>{member.role}</Title>
            <SubTitle>{member.name}</SubTitle>
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
        <List>
            {items}
        </List>
    );
};
