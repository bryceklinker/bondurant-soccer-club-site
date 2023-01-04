import { FunctionComponent } from 'react';
import { BoardMemberData } from '../../common/state/models';
import { RowFlex } from '../../common/layout/RowFlex';
import { SubTitle } from '../../common/components/SubTitle';
import { Link } from 'gatsby';
import { ColumnFlex } from '../../common/layout/ColumnFlex';

export interface BoardMemberProps {
    member: BoardMemberData;
}

export const BoardMember: FunctionComponent<BoardMemberProps> = ({
    member
}) => {
    const name =
        member.email !== '' ? (
            <a href={BoardMemberData.getMailToLink([member])}>{member.name}</a>
        ) : (
            member.name
        );
    return (
        <RowFlex className={'board-member gap-2'}>
            <SubTitle>
                {member.roleTitle}:&nbsp;{name}
            </SubTitle>
            {member.jobDescriptionRoute && (
                <Link to={member.jobDescriptionRoute}>Job Description</Link>
            )}
        </RowFlex>
    );
};
