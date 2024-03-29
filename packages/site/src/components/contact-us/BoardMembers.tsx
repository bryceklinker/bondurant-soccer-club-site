import { FunctionComponent } from 'react';
import { BoardMemberGroup } from './BoardMemberGroup';
import { Arrays } from '../../common/extensions/arrays';
import { GappedStack } from '../../common/components/GappedStack';
import { BoardMemberData } from '../../common/state/board-member-data';

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
