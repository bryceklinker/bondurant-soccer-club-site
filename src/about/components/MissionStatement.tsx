import React, {FunctionComponent} from 'react';
import {Section, Divider, Paragraph, SubTitle} from '../../common';

export const MissionStatement: FunctionComponent = () => {
    return (
        <Section shadow className={'padded-content'}>
            <SubTitle>Mission Statement</SubTitle>
            <Divider/>
            <Paragraph>
                The mission of Bondurant Soccer Club is to:
                <br/>A) Promote the sport of soccer to all youth in the city of Bondurant and surrounding areas
                <br/>B) Foster sportsmanship and teamwork
                <br/>C) Create a family environment that will bring people of the community together
                <br/>D) Develop our youth into better leaders
            </Paragraph>
        </Section>
    );
};
