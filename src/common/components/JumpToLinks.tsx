import React, {FunctionComponent} from 'react';
import {Button, Grid} from 'semantic-ui-react';

import './JumpToLinks.css';
export const JumpToLinks: FunctionComponent = () => {
    return (
        <Grid columns={4} stackable centered textAlign={'center'} verticalAlign={'middle'}>
            <Grid.Column className={'jump-link-container'}>
                <Button size={'massive'} circular color={'blue'} className={'jump-link'}>
                    Get<br/>Involved
                </Button>
            </Grid.Column>
            <Grid.Column className={'jump-link-container'}>
                <Button size={'massive'} circular color={'blue'} className={'jump-link'}>
                    Contact Us
                </Button>
            </Grid.Column>
            <Grid.Column className={'jump-link-container'}>
                <Button size={'massive'} circular color={'blue'} className={'jump-link'}>
                    About
                </Button>
            </Grid.Column>
            <Grid.Column className={'jump-link-container'}>
                <Button size={'massive'} circular color={'blue'} className={'jump-link'}>
                    Locations
                </Button>
            </Grid.Column>
        </Grid>
    )
}
