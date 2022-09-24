import React, { FunctionComponent } from 'react';
import { useBoardMembers } from '../common/hooks/board-members-hooks';
import { BoardMembers } from './BoardMembers';
import { GappedStack } from '../common/components/GappedStack';
import { Title } from '../common/components/Title';

export const ContactUsPage: FunctionComponent = () => {
    const boardMembers = useBoardMembers();
    return (
        <GappedStack padded>
            <Title>Board Members</Title>

            <BoardMembers members={boardMembers} />
        </GappedStack>
    );
};
