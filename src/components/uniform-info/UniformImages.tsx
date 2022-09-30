import React, { FunctionComponent } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { RowFlex } from '../../common/layout/RowFlex';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import { SubTitle } from '../../common/components/SubTitle';

export const UniformImages: FunctionComponent = () => {
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>Uniform Images</SectionTitle>}>
                <RowFlex>
                    <ColumnFlex className={'items-center'}>
                        <SubTitle>Home Jersey</SubTitle>
                        <StaticImage
                            src={'../../assets/white_jersey.jpg'}
                            alt={'White Jersey'}
                        />
                    </ColumnFlex>

                    <ColumnFlex className={'items-center'}>
                        <SubTitle>Away Jersey</SubTitle>
                        <StaticImage
                            src={'../../assets/blue_jersey.jpg'}
                            alt={'Blue Jersey'}
                        />
                    </ColumnFlex>
                </RowFlex>
            </CollapsiblePanel>
        </Section>
    );
};
