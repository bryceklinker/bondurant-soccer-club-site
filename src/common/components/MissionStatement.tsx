import React, {FunctionComponent} from 'react';
import {Divider, Header, Segment, SegmentInline} from 'semantic-ui-react';

import './MissionStatement.css';
export const MissionStatement: FunctionComponent = () => {
    return (
        <Segment textAlign={'center'}>
            <Header as={'h3'}>Mission Statement</Header>
            <Divider/>
            <SegmentInline className={'mission-content'}>
                <p>
                    The mission of Bondurant Soccer Club is to:
                    <br/>A) Promote the sport of soccer to all youth in the city of Bondurant and surrounding areas
                    <br/>B) Foster sportsmanship and teamwork
                    <br/>C) Create a family environment that will bring people of the community together
                    <br/>D) Develop our youth into better leaders
                </p>
            </SegmentInline>
        </Segment>
    );
};
