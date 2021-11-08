import React, {FunctionComponent} from 'react';
import {BoardMembers} from './BoardMembers';
import {GappedStack, Title, useBoardMembers} from '../../common';

export const ContactUsPage: FunctionComponent = () => {
    const boardMembers = useBoardMembers();
    return (
        <GappedStack padded flex>
            <Title>Board Members</Title>

            <BoardMembers members={boardMembers}/>
        </GappedStack>
    );
};
