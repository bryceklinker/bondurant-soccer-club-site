import React, {FunctionComponent} from 'react';
import {useSiteState} from '../../state';
import {GetInvolvedOption} from './GetInvolvedOption';
import {Title} from '../../common';

export const GetInvolvedPage: FunctionComponent = () => {
    const {getInvolvedOptions} = useSiteState();
    const options = getInvolvedOptions.map((o, i) => <GetInvolvedOption key={i} data={o} />);
    return (
        <div className={'padded-content'}>
            <Title>Get&nbsp;Involved</Title>

            {options}
        </div>
    )
}
