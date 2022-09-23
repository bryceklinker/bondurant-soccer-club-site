import React, { FunctionComponent } from 'react';
import { JumboTitle } from '../../common/components/JumboTitle';
import { LinkData } from '../../common/state';
import { Button } from '@chakra-ui/react';
import './Headline.css';
import { ColumnFlex } from '../../common/layout';

export interface HeadlineProps {
    registrationLink: LinkData;
}

export const Headline: FunctionComponent<HeadlineProps> = ({
    registrationLink
}) => {
    return (
        <ColumnFlex className={'headline-container shadow'}>
            <ColumnFlex className={'headline'}>
                <JumboTitle className={'headline-title'}>
                    Bondurant Soccer Club
                </JumboTitle>
                <Button
                    as={'a'}
                    target={'_blank'}
                    color={'blue'}
                    className={'shadow large-button rounded-button'}
                    aria-label={'register here'}
                    href={registrationLink.url}>
                    {registrationLink.text}
                </Button>
            </ColumnFlex>
        </ColumnFlex>
    );
};
