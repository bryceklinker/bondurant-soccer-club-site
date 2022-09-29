import React, { FunctionComponent } from 'react';
import { Headline } from './Headline';
import { JumpToLinks } from './JumpToLinks';
import { Description } from './Description';
import {
    useCurrentSeason,
    useMaxRegistrationBirthYear,
    useMinRegistrationBirthYear,
    useRegistrationLink
} from '../../common/hooks/registration-hooks';
import { GappedStack } from '../../common/components/GappedStack';
import { Seo } from '../../common/seo/Seo';

export const HomePage: FunctionComponent = () => {
    const season = useCurrentSeason();
    const minRegistrationYear = useMinRegistrationBirthYear();
    const maxRegistrationYear = useMaxRegistrationBirthYear();
    const registrationLink = useRegistrationLink();
    return (
        <>
            <Seo
                title={'Home'}
                description={'Official home page of the Bondurant Soccer club'}
            />
            <GappedStack className={'gap-8'}>
                <Headline registrationLink={registrationLink} />

                <JumpToLinks />

                <Description
                    season={season}
                    maxBirthYear={maxRegistrationYear}
                    minBirthYear={minRegistrationYear}
                />
            </GappedStack>
        </>
    );
};
