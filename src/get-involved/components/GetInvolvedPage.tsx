import React, {FunctionComponent} from 'react';
import {useSiteState} from '../../state';
import {GetInvolvedOption} from './GetInvolvedOption';
import {Header} from 'semantic-ui-react';

export const GetInvolvedPage: FunctionComponent = () => {
    const {getInvolvedOptions} = useSiteState();
    const options = getInvolvedOptions.map((o, i) => <GetInvolvedOption key={i} data={o} />);
    return (
        <div className={'padded-content'}>
            <Header as={'h1'}>Get Involved</Header>

            {options}
        </div>
    )
}
