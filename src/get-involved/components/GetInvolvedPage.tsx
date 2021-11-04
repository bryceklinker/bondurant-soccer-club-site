import React, {FunctionComponent} from 'react';
import {useSiteState} from '../../state';
import {GetInvolvedOption} from './GetInvolvedOption';
import {Title} from '../../common';
import { Stack } from '@fluentui/react';

export const GetInvolvedPage: FunctionComponent = () => {
    const {getInvolvedOptions} = useSiteState();
    const options = getInvolvedOptions.map((o, i) => <GetInvolvedOption key={i} data={o}/>);
    return (
        <Stack tokens={{childrenGap: '1em'}} className={'padded-content'}>
            <Title>Get Involved</Title>

            {options}
        </Stack>
    );
};
