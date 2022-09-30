import { FC } from 'react';
import { Section } from '../../common/components/Section';
import { Season } from '../../common/state/models';

export interface DescriptionProps {
    season: Season;
    minBirthYear: number;
    maxBirthYear: number;
}

export const Description: FC<DescriptionProps> = ({
    season,
    minBirthYear,
    maxBirthYear
}) => {
    return (
        <Section padded className={'gap-4 mb-16 mx-8'}>
            <h3>
                Bondurant Soccer Club has levels for all ages. For the{' '}
                {season.startYear}/{season.endYear} season, this includes those
                players born between {minBirthYear} and {maxBirthYear}.
            </h3>

            <h3>
                We are a 100% volunteer soccer club. We couldn't do all that we
                do for the kids without your help. Please contact a board member
                if you have any questions about how you can assist in keeping
                things going for your player.
            </h3>
        </Section>
    );
};
