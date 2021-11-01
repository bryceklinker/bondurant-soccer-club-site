import React, {FunctionComponent} from 'react';
import {Button, Grid, Icon} from 'semantic-ui-react';

export const SocialMediaFooter: FunctionComponent = () => {
    return (
        <Grid stackable>
            <Grid.Column>
                <Button as={'a'}
                        color={'blue'}
                        icon
                        labelPosition={'right'}
                        href={'https://www.facebook.com/bondurantsoccerclub/'}>
                    <Icon name={'facebook official'} />
                    Facebook
                </Button>
            </Grid.Column>
        </Grid>
    );
};
