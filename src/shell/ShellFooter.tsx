import React, {FunctionComponent} from 'react';
import {Grid, Segment} from 'semantic-ui-react';
import {Copyright, SocialMediaFooter} from '../common';

import './ShellFooter.css';

export const ShellFooter: FunctionComponent = () => {
    return (
        <Segment className={'shell-footer'} inverted vertical>
            <Grid columns={3} stackable verticalAlign={'middle'}>
                <Grid.Column>
                    <Copyright/>
                </Grid.Column>

                <Grid.Column>

                </Grid.Column>
                <Grid.Column className={'right-footer'}>
                    <SocialMediaFooter/>
                </Grid.Column>
            </Grid>
        </Segment>
    );
};
