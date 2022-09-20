import {FunctionComponent} from 'react';
import { HStack, Image } from '@chakra-ui/react';

const FindUsOnFacebook = require('../assets/facebook/FindUs-FB-RGB-BRC-Site-500.png');

export const SocialMedia: FunctionComponent = () => {
    return (
        <HStack>
            <a target={'_blank'}
               className={'social-media-button'}
               aria-label={'find us on facebook'}
               href={'https://www.facebook.com/bondurantsoccerclub/'}>
                <Image height={'2em'} src={FindUsOnFacebook}/>
            </a>
        </HStack>
    );
};
