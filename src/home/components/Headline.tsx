import React, {FunctionComponent} from 'react';
import {PrimaryButton, Stack} from '@fluentui/react';

import './Headline.css';
import {JumboTitle} from '../../common/components/JumboTitle';
export const Headline: FunctionComponent = () => {
    return (
        <Stack className={'headline-container'}>
            <Stack className={'headline'}>
                <JumboTitle className={'headline-title'}>
                    Bondurant Soccer Club
                </JumboTitle>
                <PrimaryButton as={'a'}
                               target={'_blank'}
                               color={'blue'}
                               href={'https://bondurantsc.demosphere-secure.com/_registration'}>
                    Register Here
                </PrimaryButton>
            </Stack>
        </Stack>
    );
};
