import { Stack } from '@fluentui/react';
import React, {FunctionComponent} from 'react';
import {MissionStatement} from './MissionStatement';
import {Title} from '../../common';

export const AboutPage: FunctionComponent = () => {
    return (
        <Stack className={'padded-content flex'}>
            <Title>About</Title>
            <MissionStatement />
        </Stack>
    )
}
