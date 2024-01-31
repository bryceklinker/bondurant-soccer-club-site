import React, { FunctionComponent } from 'react';
import { Headline } from './Headline';
import { JumpToLinks } from './JumpToLinks';
import { Description } from './Description';
import { GappedStack } from '../../common/components/GappedStack';
import {
    useCurrentSeason,
    useMaxRegistrationBirthYear,
    useMinRegistrationBirthYear,
    useRegistrationLink
} from '../registration-info/hooks';

export const HomePage: FunctionComponent = () => {
    const season = useCurrentSeason();
    const minRegistrationYear = useMinRegistrationBirthYear();
    const maxRegistrationYear = useMaxRegistrationBirthYear();
    const registrationLink = useRegistrationLink();
    return (
        <GappedStack className={'gap-8'}>
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
