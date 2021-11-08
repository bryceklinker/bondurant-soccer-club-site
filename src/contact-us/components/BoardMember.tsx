import React, {FunctionComponent} from 'react';
import {Link, Stack} from '@fluentui/react';
import {BoardMemberData, SubTitle} from '../../common';

export interface BoardMemberProps {
    member: BoardMemberData;
}

export const BoardMember: FunctionComponent<BoardMemberProps> = ({member}) => {
    const name = member.email !== ''
        ? <Link href={`mailto:${member.email}`}>{member.name}</Link>
        : member.name;
    return (
        <Stack horizontalAlign={'start'} className={'board-member'} tokens={{childrenGap: '0.5em'}}>
            <SubTitle>
                Name:&nbsp;{name}
            </SubTitle>
            <SubTitle>Role:&nbsp;{member.roleTitle}</SubTitle>
        </Stack>
    );
};
