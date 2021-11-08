import React, {FunctionComponent} from 'react';
import {useSiteState} from '../../state';
import {GetInvolvedOption} from './GetInvolvedOption';
import {GappedStack, Title} from '../../common';

export const GetInvolvedPage: FunctionComponent = () => {
    const {getInvolvedOptions} = useSiteState();
    const options = getInvolvedOptions.map((o, i) => <GetInvolvedOption key={i} data={o}/>);
    return (
        <GappedStack padded flex>
            <Title>Get Involved</Title>

            {options}
        </GappedStack>
    );
};
