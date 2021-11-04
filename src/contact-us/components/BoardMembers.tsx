import React, {FunctionComponent} from 'react';
import {BoardMemberData} from '../state';
import {Section, GappedStack, SectionTitle} from '../../common';
import {Link} from '@fluentui/react';

export interface BoardMemberProps {
    member: BoardMemberData;
}

export const BoardMember: FunctionComponent<BoardMemberProps> = ({member}) => {
    return (
        <Section shadow className={'padded-content'}>
            <SectionTitle>{member.role}:&nbsp;{member.name}</SectionTitle>
            <Link href={`mailto:${member.email}`}>Email</Link>
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
