import React from 'react';
import {Grid} from 'semantic-ui-react';
import {Headline, JumpToLinks, MissionStatement} from '../common';

import './index.css';

export const Index = () => {
    return (
        <Grid columns={1}>
            <Grid.Row>
                <Grid.Column>
                    <Headline/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <JumpToLinks />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Index;
