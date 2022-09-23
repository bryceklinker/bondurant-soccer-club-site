import React, { FunctionComponent } from 'react';
import { Headline } from './Headline';
import { JumpToLinks } from './JumpToLinks';
import { GappedStack } from '../../common/components';
import { Description } from './Description';
import {
    useCurrentSeason,
    useMaxRegistrationBirthYear,
    useMinRegistrationBirthYear,
    useRegistrationLink
} from '../../common/hooks';

export const HomePage: FunctionComponent = () => {
    const season = useCurrentSeason();
    const minRegistrationYear = useMinRegistrationBirthYear();
    const maxRegistrationYear = useMaxRegistrationBirthYear();
    const registrationLink = useRegistrationLink();
    return (
        <GappedStack gap={'2em'}>
            <Headline registrationLink={registrationLink} />

            <JumpToLinks />

            <Description
                season={season}
                maxBirthYear={maxRegistrationYear}
                minBirthYear={minRegistrationYear}
            />
        </GappedStack>
    );
};
