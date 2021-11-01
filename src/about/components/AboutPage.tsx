import React, {FunctionComponent} from 'react';
import {MissionStatement} from './MissionStatement';

export const AboutPage: FunctionComponent = () => {
    return (
        <div className={'padded-content'}>
            <MissionStatement />
        </div>
    )
}
