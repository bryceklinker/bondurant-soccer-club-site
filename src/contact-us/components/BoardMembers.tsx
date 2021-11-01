import React, {FunctionComponent} from 'react';
import {BoardMemberData} from '../state';
import {Header, List, Segment} from 'semantic-ui-react';

export interface BoardMemberProps {
    member: BoardMemberData;
}

export const BoardMember: FunctionComponent<BoardMemberProps> = ({member}) => {
    return (
        <Segment>
            <Header as={'h3'}>{member.role}</Header>
            <Header as={'h5'}>{member.name}</Header>
            <a href={`mailto:${member.email}`}>Email</a>
        </Segment>
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
