import React, { FunctionComponent } from 'react';
import { JumboTitle } from '../../common/components/JumboTitle';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import { LinkData } from '../../common/state/link-data';

export interface HeadlineProps {
    registrationLink: LinkData;
}

export const Headline: FunctionComponent<HeadlineProps> = ({
    registrationLink
}) => {
    return (
        <ColumnFlex
            className={
                'bg-home-banner bg-center bg-no-repeat bg-cover shadow sm:h-52 md:h-96'
            }>
            <ColumnFlex
                className={'h-full justify-center items-center bg-black/40'}>
                <JumboTitle className={'text-white'}>
                    Bondurant Soccer Club
                </JumboTitle>
                <a
                    target={'_blank'}
                    className={
                        'shadow-2xl my-4 p-8 text-xl rounded-3xl large-button'
                    }
                    aria-label={'register here'}
                    href={registrationLink.url}>
                    <h3>{registrationLink.text}</h3>
                </a>
            </ColumnFlex>
        </ColumnFlex>
    );
};
