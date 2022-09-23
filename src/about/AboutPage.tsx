import { FunctionComponent } from 'react';
import { MissionStatement } from './MissionStatement';
import { GappedStack, Title } from '../common/components';

export const AboutPage: FunctionComponent = () => {
    return (
        <GappedStack padded>
            <Title>About</Title>
            <MissionStatement />
        </GappedStack>
    );
};
