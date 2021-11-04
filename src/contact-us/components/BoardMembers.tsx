import React, {FunctionComponent} from 'react';
import {Link, Stack} from '@fluentui/react';
import {BoardMemberData} from '../state';
import {Section, GappedStack, SectionTitle, Arrays, SubTitle, CollapsiblePanel} from '../../common';
import './BoardMembers.css';

export interface BoardMemberProps {
    member: BoardMemberData;
}

export const BoardMember: FunctionComponent<BoardMemberProps> = ({member}) => {
    return (
        <Stack horizontalAlign={'start'} className={'board-member'} tokens={{childrenGap: '0.5em'}}>
            <SubTitle>
                Name:&nbsp;<Link href={`mailto:${member.email}`}>{member.name}</Link>
            </SubTitle>
            <SubTitle>Role:&nbsp;{member.role}</SubTitle>
        </Stack>
    );
};

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

export interface BoardMembersProps {
    members: Array<BoardMemberData>;
}

export const BoardMembers: FunctionComponent<BoardMembersProps> = ({members}) => {
    const groups = Arrays.groupBy(members, m => m.roleGroup)
        .map(g => <BoardMemberGroup key={g.key} name={g.key} members={g.items}/>);
    return (
        <GappedStack>
            {groups}
        </GappedStack>
    );
};
