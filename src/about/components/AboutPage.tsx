import { Stack } from '@fluentui/react';
import React, {FunctionComponent} from 'react';
import {MissionStatement} from './MissionStatement';

export const AboutPage: FunctionComponent = () => {
    return (
        <Stack className={'padded-content flex'}>
            <MissionStatement />
        </Stack>
    )
}
