import {FunctionComponent} from 'react';
import {Button, VStack, HStack, Box} from '@chakra-ui/react';
import {JumboTitle} from '../common/components/JumboTitle';
import {LinkData} from '../common';

export interface HeadlineProps {
    registrationLink: LinkData;
}

export const Headline: FunctionComponent<HeadlineProps> = ({registrationLink}) => {
    return (
        <HStack className={`headline-container shadow`}>
            <VStack className={'headline'}>
                <JumboTitle>
                    Bondurant Soccer Club
                </JumboTitle>
                <Button as={'a'}
                        target={'_blank'}
                        colorScheme={'blue'}
                        className={'shadow large-button rounded-button'}
                        aria-label={'register here'}
                        href={registrationLink.url}>
                    {registrationLink.text}
                </Button>
            </VStack>
        </HStack>
    );
};
