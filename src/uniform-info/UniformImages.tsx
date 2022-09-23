import React, { FunctionComponent } from 'react';
import {
    CollapsiblePanel,
    PlainStack,
    Section,
    SectionTitle
} from '../common/components';
import { StaticImage } from 'gatsby-plugin-image';

export const UniformImages: FunctionComponent = () => {
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>Uniform Images</SectionTitle>}>
                <PlainStack horizontal flexWrap={'wrap'}>
                    <PlainStack className={'flex-half'}>
                        <StaticImage
                            src={'../assets/white_jersey.jpg'}
                            alt={'White Jersey'}
                        />
                    </PlainStack>
                    <PlainStack>
                        <StaticImage
                            src={'../assets/blue_jersey.jpg'}
                            alt={'Blue Jersey'}
                        />
                    </PlainStack>
                </PlainStack>
            </CollapsiblePanel>
        </Section>
    );
};
