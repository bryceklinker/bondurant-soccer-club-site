import {VStack} from '@chakra-ui/react';
import {FunctionComponent} from 'react';
import {Paragraph} from '../common';

export const BecomeAReferee: FunctionComponent = () => {
    return (
        <VStack>
            <Paragraph>
                If you are interested in being a Ref for the Bondurant Soccer Club, please contact our Director
                of Referees
            </Paragraph>

            <Paragraph>
                In order to become a referee, you must take classes in person and online and be at least 13 years old
            </Paragraph>
        </VStack>
    );
};
