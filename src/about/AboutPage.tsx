import { FunctionComponent } from 'react';
import { MissionStatement } from './MissionStatement';
import { GappedStack } from '../common/components/GappedStack';
import { Title } from '../common/components/Title';

export const AboutPage: FunctionComponent = () => {
    return (
        <GappedStack padded>
            <Title>About</Title>
            <MissionStatement />
        </GappedStack>
    );
};
