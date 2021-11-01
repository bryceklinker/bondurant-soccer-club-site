import React, {FunctionComponent} from 'react';
import {Button, Grid} from 'semantic-ui-react';

import './JumpToLinks.css';
export const JumpToButton: FunctionComponent = ({children}) => {
    return (
        <Button size={'massive'} circular color={'blue'} className={'jump-link'}>
            {children}
        </Button>
    )
}

export const JumpToLinks: FunctionComponent = () => {
    return (
        <Grid columns={4} stackable centered textAlign={'center'} verticalAlign={'middle'}>
            <Grid.Column className={'jump-link-container'}>
                <JumpToButton>Get Involved</JumpToButton>
            </Grid.Column>
            <Grid.Column className={'jump-link-container'}>
                <JumpToButton>
                    Contact Us
                </JumpToButton>
            </Grid.Column>
            <Grid.Column className={'jump-link-container'}>
                <JumpToButton>
                    About
                </JumpToButton>
            </Grid.Column>
            <Grid.Column className={'jump-link-container'}>
                <JumpToButton>
                    Locations
                </JumpToButton>
            </Grid.Column>
        </Grid>
    )
}
