import React, {FunctionComponent, useCallback} from 'react';
import {Button, Grid} from 'semantic-ui-react';
import {Link, useNavigate} from '@reach/router';

import './JumpToLinks.css';

export interface JumpToButtonProps {
    to: string;
}
export const JumpToButton: FunctionComponent<JumpToButtonProps> = ({to, children}) => {
    return (
        <Link to={to}>
            <Button size={'massive'} circular color={'blue'} className={'jump-link'}>
                {children}
            </Button>
        </Link>

    )
}

export const JumpToLinks: FunctionComponent = () => {
    return (
        <Grid columns={4} stackable centered textAlign={'center'} verticalAlign={'middle'}>
            <Grid.Column className={'jump-link-container'}>
                <JumpToButton to={'get-involved'}>Get Involved</JumpToButton>
            </Grid.Column>
            <Grid.Column className={'jump-link-container'}>
                <JumpToButton to={'contact-us'}>
                    Contact Us
                </JumpToButton>
            </Grid.Column>
            <Grid.Column className={'jump-link-container'}>
                <JumpToButton to={'about'}>
                    About
                </JumpToButton>
            </Grid.Column>
            <Grid.Column className={'jump-link-container'}>
                <JumpToButton to={'locations'}>
                    Locations
                </JumpToButton>
            </Grid.Column>
        </Grid>
    )
}
