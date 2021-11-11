import React, {FunctionComponent} from 'react';
import {Headline} from './Headline';
import {JumpToLinks} from './JumpToLinks';
import {
    GappedStack,
    useCurrentSeason,
    useMaxRegistrationBirthYear,
    useMinRegistrationBirthYear,
    useRegistrationLink
} from '../../common';
import {Description} from './Description';

export const HomePage: FunctionComponent = () => {
    const season = useCurrentSeason();
    const minRegistrationYear = useMinRegistrationBirthYear();
    const maxRegistrationYear = useMaxRegistrationBirthYear();
    const registrationLink = useRegistrationLink();
    return (
        <GappedStack flex gap={'2em'}>
            <Headline registrationLink={registrationLink}/>

            <JumpToLinks/>

            <Description season={season}
                         maxBirthYear={maxRegistrationYear}
                         minBirthYear={minRegistrationYear}/>
        </GappedStack>
    );
};
