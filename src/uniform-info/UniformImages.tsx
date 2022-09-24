import React, { FunctionComponent } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Section } from '../common/components/Section';
import { CollapsiblePanel } from '../common/components/CollapsiblePanel';
import { SectionTitle } from '../common/components/SectionTitle';
import { PlainStack } from '../common/components/PlainStack';

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
