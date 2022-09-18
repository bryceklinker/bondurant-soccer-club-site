import React, {FunctionComponent} from 'react';
import {Image, Stack} from '@fluentui/react';
import styles from './SocialMedia.module.css';

const FindUsOnFacebook = require('../../assets/facebook/FindUs-FB-RGB-BRC-Site-500.png');

export const SocialMedia: FunctionComponent = () => {
    return (
        <Stack>
            <a target={'_blank'}
               className={styles.socialMediaButton}
               aria-label={'find us on facebook'}
               href={'https://www.facebook.com/bondurantsoccerclub/'}>
                <Image height={'2em'} src={FindUsOnFacebook}/>
            </a>
        </Stack>
    );
};
