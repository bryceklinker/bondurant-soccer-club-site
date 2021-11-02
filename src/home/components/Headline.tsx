import {Button, Grid, Header} from 'semantic-ui-react';
import {Media} from '../../common/components/MediaContextProvider';
import React, {FunctionComponent} from 'react';

import './Headline.css';

export const Headline: FunctionComponent = () => {
    return (
        <div className={'headline-container'}>
            <div className={'headline'}>
                <Header as={'h1'}>
                    <Media at={'computer'}>
                        Welcome to Bondurant Soccer Club
                    </Media>
                    <Media at={'tablet'}>
                        Bondurant Soccer Club
                    </Media>
                    <Media at={'mobile'}>
                        BSC
                    </Media>
                </Header>
                <Button as={'a'}
                        target={'_blank'}
                        className={'headline-action'}
                        color={'blue'}
                        href={'https://bondurantsc.demosphere-secure.com/_registration'}>
                    Register Here
                </Button>
            </div>
        </div>
    );
};
