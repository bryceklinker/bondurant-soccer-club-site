import { FunctionComponent } from 'react';
import { SubTitle } from '../common/components';
import { RowFlex } from '../common/layout';
import { BoardMemberData } from '../common/state';

export interface BoardMemberProps {
    member: BoardMemberData;
}

export const BoardMember: FunctionComponent<BoardMemberProps> = ({
    member
}) => {
    const name =
        member.email !== '' ? (
            <a href={`mailto:${member.email}`}>{member.name}</a>
        ) : (
            member.name
        );
    return (
        <RowFlex gap={'0.5em'} className={'board-member'}>
            <SubTitle>Name:&nbsp;{name}</SubTitle>
            <SubTitle>Role:&nbsp;{member.roleTitle}</SubTitle>
        </RowFlex>
    );
};
