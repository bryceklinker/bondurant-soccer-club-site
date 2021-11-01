import React, {FunctionComponent, useCallback} from 'react';
import {Button, Grid} from 'semantic-ui-react';
import {Link, useNavigate} from '@reach/router';

import './JumpToLinks.css';

export interface JumpToButtonProps {
    to: string;
}

export const JumpToButton: FunctionComponent<JumpToButtonProps> = ({to, children}) => {
    return (
        <Grid.Column className={'jump-link-container'}>
            <Link to={to}>
                <Button size={'massive'} color={'blue'} circular className={'jump-link bg-blue'}>
                    {children}
                </Button>
            </Link>
        </Grid.Column>

    );
};

export const JumpToLinks: FunctionComponent = () => {
    return (
        <Grid columns={4}
              stackable
              centered
              textAlign={'center'}
              verticalAlign={'middle'}
              className={'jump-links-container'}>
            <JumpToButton to={'get-involved'}>
                Get Involved
            </JumpToButton>
            <JumpToButton to={'contact-us'}>
                Contact Us
            </JumpToButton>
            <JumpToButton to={'about'}>
                About
            </JumpToButton>
            <JumpToButton to={'locations'}>
                Locations
            </JumpToButton>
        </Grid>
    );
};
