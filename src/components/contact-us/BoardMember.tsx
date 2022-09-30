import { FunctionComponent } from 'react';
import { BoardMemberData } from '../../common/state/models';
import { RowFlex } from '../../common/layout/RowFlex';
import { SubTitle } from '../../common/components/SubTitle';

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
        <RowFlex className={'board-member gap-2'}>
            <SubTitle>
                {member.roleTitle}:&nbsp;{name}
            </SubTitle>
        </RowFlex>
    );
};
