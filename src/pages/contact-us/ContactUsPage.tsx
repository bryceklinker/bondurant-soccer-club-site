import React, { FunctionComponent } from 'react';
import { useBoardMembers } from '../../common/hooks/board-members-hooks';
import { BoardMembers } from './BoardMembers';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { Seo } from '../../common/seo/Seo';

export const ContactUsPage: FunctionComponent = () => {
    const boardMembers = useBoardMembers();
    return (
        <>
            <Seo
                title={'Contact Us'}
                description={'Contact Bondurant Soccer Club board members'}
                route={'contact-us'}
            />
            <GappedStack padded>
                <Title>Board Members</Title>

                <BoardMembers members={boardMembers} />
            </GappedStack>
        </>
    );
};
