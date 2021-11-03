import React, {FunctionComponent} from 'react';
import {CommandBarButton} from '@fluentui/react';

export const SocialMediaFooter: FunctionComponent = () => {
    return (
        <div>
            <div>
                <CommandBarButton as={'a'}
                                  text={'Facebook'}
                                  className={'bg-facebook-blue'}
                                  iconProps={{iconName: 'FacebookLogoIcon'}}
                                  target={'_blank'}
                                  href={'https://www.facebook.com/bondurantsoccerclub/'} />
            </div>
        </div>
    );
};
