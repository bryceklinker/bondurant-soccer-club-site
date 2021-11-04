import React, {FunctionComponent} from 'react';
import {DefaultButton, Stack} from '@fluentui/react';

export const SocialMediaFooter: FunctionComponent = () => {
    return (
        <Stack>
            <DefaultButton as={'a'}
                           className={'bg-facebook-blue'}
                           iconProps={{iconName: 'FacebookLogoIcon'}}
                           target={'_blank'}
                           href={'https://www.facebook.com/bondurantsoccerclub/'}>
                Facebook
            </DefaultButton>
        </Stack>
    );
};
