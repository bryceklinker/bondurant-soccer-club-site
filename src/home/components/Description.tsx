import React, {FunctionComponent} from 'react';
import {Paragraph, Season, Section} from '../../common';
import './Description.css';

export interface DescriptionProps {
    season: Season;
    minBirthYear: number;
    maxBirthYear: number;
}

export const Description: FunctionComponent<DescriptionProps> = ({season, minBirthYear, maxBirthYear}) => {
    return (
        <Section flex padded className={'description'}>
            <Paragraph>
                Bondurant Soccer Club has levels for all ages. For the {season.startYear}/{season.endYear} season, this
                includes those players born between {minBirthYear} and {maxBirthYear}.
            </Paragraph>
            <Paragraph>
                We are a 100% volunteer soccer club. We couldn't do all that we do for the kids without your help.
                Please contact a board member if you have any questions about how you can assist in keeping things going
                for your player.
            </Paragraph>
        </Section>
    );
};
