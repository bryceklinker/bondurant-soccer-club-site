import {FunctionComponent} from 'react';
import {Spacer} from '../common';
import { Copyright } from './Copyright';
import { SocialMedia } from './SocialMedia';
import { HStack } from '@chakra-ui/react';

export const ShellFooter: FunctionComponent = () => {
    return (
        <HStack className={'shell-footer'} verticalAlign={'center'}>
            <Copyright/>
            <Spacer/>
            <SocialMedia/>
        </HStack>
    );
};
