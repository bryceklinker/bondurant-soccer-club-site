import React, { FunctionComponent, useMemo } from 'react';
import { JumboTitle } from '../../common/components/JumboTitle';
import { LinkData } from '../../common/state/models';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import * as CSS from 'csstype';
import './Headline.css';

export interface HeadlineProps {
    registrationLink: LinkData;
}

export const Headline: FunctionComponent<HeadlineProps> = ({
    registrationLink
}) => {
    return (
        <ColumnFlex className={'headline-container shadow sm:h-52 md:h-96'}>
            <ColumnFlex className={'headline'}>
                <JumboTitle className={'headline-title'}>
                    Bondurant Soccer Club
                </JumboTitle>
                <a
                    target={'_blank'}
                    className={
                        'shadow-2xl mt-4 p-8 text-xl rounded-3xl bg-blue-700 text-white hover:brightness-90'
                    }
                    aria-label={'register here'}
                    href={registrationLink.url}>
                    <h3>{registrationLink.text}</h3>
                </a>
            </ColumnFlex>
        </ColumnFlex>
    );
};
