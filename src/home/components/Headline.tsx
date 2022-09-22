import React, { FunctionComponent } from 'react';
import { PrimaryButton, Stack } from '@fluentui/react';
import { JumboTitle } from '../../common/components/JumboTitle';
import { LinkData } from '../../common';
import './Headline.css';

export interface HeadlineProps {
    registrationLink: LinkData;
}

export const Headline: FunctionComponent<HeadlineProps> = ({
    registrationLink
}) => {
    return (
        <Stack className={'headline-container shadow'}>
            <Stack className={'headline'}>
                <JumboTitle className={'headline-title'}>
                    Bondurant Soccer Club
                </JumboTitle>
                <PrimaryButton
                    as={'a'}
                    target={'_blank'}
                    color={'blue'}
                    className={'shadow large-button rounded-button'}
                    aria-label={'register here'}
                    href={registrationLink.url}>
                    {registrationLink.text}
                </PrimaryButton>
            </Stack>
        </Stack>
    );
};
