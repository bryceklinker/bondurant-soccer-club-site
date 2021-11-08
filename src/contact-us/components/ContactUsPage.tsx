import React, {FunctionComponent} from 'react';
import {useSiteState} from '../../state';
import {BoardMembers} from './BoardMembers';
import {GappedStack, Title} from '../../common';

export const ContactUsPage: FunctionComponent = () => {
    const {boardMembers} = useSiteState();
    return (
        <GappedStack padded flex>
            <Title>Board Members</Title>

            <BoardMembers members={boardMembers}/>
        </GappedStack>
    );
};
