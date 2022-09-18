impor, {FunctionComponent} from 'react';
import {Image} from '@fluentui/react';
import {CollapsiblePanel, PlainStack, Section, SectionTitle} from '../common';

const WhiteJersey = require('../assets/white_jersey.jpg');
const BlueJersey = require('../assets/blue_jersey.jpg');

export const UniformImages: FunctionComponent = () => {
    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>Uniform Images</SectionTitle>}>
                <PlainStack horizontal flex wrap>
                    <PlainStack className={'flex-half'}>
                        <Image src={WhiteJersey} alt={'White Jersey'}/>
                    </PlainStack>
                    <PlainStack>
                        <Image src={BlueJersey} alt={'Blue Jersey'}/>
                    </PlainStack>
                </PlainStack>
            </CollapsiblePanel>
        </Section>
    );
};
