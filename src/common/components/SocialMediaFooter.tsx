import React, {FunctionComponent} from 'react';
import {Button, Grid, Icon} from 'semantic-ui-react';

export const SocialMediaFooter: FunctionComponent = () => {
    return (
        <Grid stackable>
            <Grid.Column>
                <Button as={'a'}
                        className={'bg-facebook-blue'}
                        icon
                        labelPosition={'right'}
                        target={'_blank'}
                        href={'https://www.facebook.com/bondurantsoccerclub/'}>
                    <Icon name={'facebook official'} />
                    Facebook
                </Button>
            </Grid.Column>
        </Grid>
    );
};
