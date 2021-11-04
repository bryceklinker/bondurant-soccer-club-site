import React, {FunctionComponent} from 'react';
import {BoardMemberData} from '../state';
import {Arrays, GappedStack} from '../../common';
import {BoardMemberGroup} from './BoardMemberGroup';

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
