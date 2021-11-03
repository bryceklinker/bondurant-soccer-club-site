import React, {FunctionComponent} from 'react';
import {DefaultButton} from '@fluentui/react';
import {Section} from '../../common';

export const SocialMediaFooter: FunctionComponent = () => {
    return (
        <Section>
            <DefaultButton as={'a'}
                           className={'bg-facebook-blue'}
                           iconProps={{iconName: 'FacebookLogoIcon'}}
                           target={'_blank'}
                           href={'https://www.facebook.com/bondurantsoccerclub/'}>
                Facebook
            </DefaultButton>
        </Section>
    );
};
