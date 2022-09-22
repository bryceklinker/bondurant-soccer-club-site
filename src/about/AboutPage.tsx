import React, { FunctionComponent } from 'react';
import { MissionStatement } from './MissionStatement';
import { GappedStack, Title } from '../common';
import { Layout } from '../common/layout/Layout';

export const AboutPage: FunctionComponent = () => {
    return (
        <GappedStack padded flex>
            <Title>About</Title>
            <MissionStatement />
        </GappedStack>
    );
};
