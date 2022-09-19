import {FunctionComponent} from 'react';
import {GetInvolvedOption} from './GetInvolvedOption';
import {GappedStack, Title, useGetInvolvedOptions} from '../common';

export const GetInvolvedPage: FunctionComponent = () => {
    const getInvolvedOptions = useGetInvolvedOptions();
    const options = getInvolvedOptions.map((o, i) => <GetInvolvedOption key={i} data={o}/>);
    return (
        <GappedStack padded>
            <Title>Get Involved</Title>

            {options}
        </GappedStack>
    );
};
