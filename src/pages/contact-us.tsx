import React, {FunctionComponent} from 'react';
import {Header} from 'semantic-ui-react';
import {BoardMembers} from '../contact-us/components/BoardMembers';
import {useSiteState} from '../state/use-site-state';

export const ContactUs: FunctionComponent = () => {
    const {boardMembers} = useSiteState()
    return (
        <div className={'padded-content'}>
            <Header as={'h1'}>Board Members</Header>

             <BoardMembers members={boardMembers} />
        </div>
    )
}

export default ContactUs
