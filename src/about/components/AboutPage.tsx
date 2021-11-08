import React, {FunctionComponent} from 'react';
import {MissionStatement} from './MissionStatement';
import {GappedStack, Title} from '../../common';

export const AboutPage: FunctionComponent = () => {
    return (
        <GappedStack padded flex>
            <Title>About</Title>
            <MissionStatement />
        </GappedStack>
    )
}
