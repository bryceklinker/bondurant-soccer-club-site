import React, { FunctionComponent } from 'react';
import { BoardMembers } from './BoardMembers';
import { GappedStack, Title } from '../common/components';
import { useBoardMembers } from '../common/hooks';

export const ContactUsPage: FunctionComponent = () => {
    const boardMembers = useBoardMembers();
    return (
        <GappedStack padded>
            <Title>Board Members</Title>

            <BoardMembers members={boardMembers} />
        </GappedStack>
    );
};
