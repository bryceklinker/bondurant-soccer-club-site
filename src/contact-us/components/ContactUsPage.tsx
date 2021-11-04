import React, {FunctionComponent} from 'react';
import {Stack} from '@fluentui/react';
import {useSiteState} from '../../state';
import {BoardMembers} from './BoardMembers';
import {Title} from '../../common';

export const ContactUsPage: FunctionComponent = () => {
    const {boardMembers} = useSiteState();
    return (
        <Stack className={'padded-content'}>
            <Title>Board Members</Title>

            <BoardMembers members={boardMembers}/>
        </Stack>
    );
};
