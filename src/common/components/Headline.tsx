import {Grid} from 'semantic-ui-react';
import {Media} from './MediaContextProvider';
import React, {FunctionComponent} from 'react';

import './Headline.css';
export const Headline: FunctionComponent = () => {
    return (
        <Grid columns={1}>
            <Grid.Row>
                <Grid.Column className={'headline-container'}>
                    <div className={'headline'}>
                        <Media at={'computer'}>
                            Welcome to Bondurant Soccer Club
                        </Media>
                        <Media at={'tablet'}>
                            Bondurant Soccer Club
                        </Media>
                        <Media at={'mobile'}>
                            BSC
                        </Media>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
