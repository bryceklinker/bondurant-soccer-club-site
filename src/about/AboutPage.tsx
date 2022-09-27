import { FunctionComponent } from 'react';
import { MissionStatement } from './MissionStatement';
import { GappedStack } from '../common/components/GappedStack';
import { Title } from '../common/components/Title';
import { Seo } from '../common/seo/Seo';

export const AboutPage: FunctionComponent = () => {
    return (
        <>
            <Seo
                title={'About'}
                description={'About Bondurant Soccer Club'}
                route={'about'}
            />
            <GappedStack padded>
                <Title>About</Title>
                <MissionStatement />
            </GappedStack>
        </>
    );
};
