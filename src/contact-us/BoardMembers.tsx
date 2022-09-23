import { FunctionComponent } from 'react';
import { GappedStack } from '../common/components';
import { BoardMemberGroup } from './BoardMemberGroup';
import { BoardMemberData } from '../common/state';
import { Arrays } from '../common/extensions';

export interface BoardMembersProps {
    members: Array<BoardMemberData>;
}

export const BoardMembers: FunctionComponent<BoardMembersProps> = ({
    members
}) => {
    const groups = Arrays.groupBy(members, m => m.roleGroup).map(g => (
        <BoardMemberGroup key={g.key} name={g.key} members={g.items} />
    ));
    return <GappedStack>{groups}</GappedStack>;
};
