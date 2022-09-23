import React, { FunctionComponent } from 'react';
import {
    CollapsiblePanel,
    ExternalLink,
    LinkData,
    Paragraph,
    Section,
    SectionTitle,
    UniformPurchaseOption,
    UniformSize,
    Numbers,
    SubTitle
} from '../common';
import { UnorderedList } from '@chakra-ui/react';

export interface UniformCostsAndSizesProps {
    sizes: Array<UniformSize>;
    purchaseOptions: Array<UniformPurchaseOption>;
    directorLink: LinkData;
}

export const UniformCostsAndSizes: FunctionComponent<
    UniformCostsAndSizesProps
> = ({ directorLink, purchaseOptions, sizes }) => {
    const purchaseItems = purchaseOptions.map((item, index) => (
        <PurchaseOption key={index} item={item} />
    ));

    const sizeItems = sizes.map((size, index) => (
        <AvailableSize key={index} size={size} />
    ));
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>BSC Uniform Costs & Sizes</SectionTitle>}>
                <Paragraph>
                    Fall of 2021 all uniforms must be the design shown below and
                    with numbers.
                </Paragraph>

                <Paragraph>
                    If you have questions please contact the{' '}
                    <ExternalLink href={directorLink.url}>
                        {directorLink.text}
                    </ExternalLink>
                </Paragraph>

                <Paragraph>
                    A uniform kit consists of 2 jerseys (1 home and 1 away), a
                    single pair of blue shorts, and a pair of solid-colored
                    socks to match each of the jerseys (2 pairs total). Each
                    part can be purchased together or separately. Costs listed
                    may not include shipping costs if ordering separately after
                    the season order has been placed.
                </Paragraph>

                <SubTitle>Uniform Purchase Options</SubTitle>
                <UnorderedList>{purchaseItems}</UnorderedList>

                <Paragraph>
                    Jerseys and shorts do not have to be ordered in the same
                    size so you are able to customize the uniform to fit your
                    needs. Sizes available for jerseys and shorts are:
                </Paragraph>

                <SubTitle>Available Sizes</SubTitle>
                <UnorderedList>{sizeItems}</UnorderedList>
            </CollapsiblePanel>
        </Section>
    );
};

export interface PurchaseOptionProps {
    item?: UniformPurchaseOption;
}

export const PurchaseOption: FunctionComponent<PurchaseOptionProps> = ({
    item
}) => {
    if (!item) {
        return null;
    }
    return (
        <Paragraph className={'indent'}>
            {item.count} {item.part} = {Numbers.formatCurrency(item.cost)}
        </Paragraph>
    );
};

export interface AvailableSizeProps {
    size?: UniformSize;
}

export const AvailableSize: FunctionComponent<AvailableSizeProps> = ({
    size
}) => {
    if (!size) {
        return null;
    }

    return <Paragraph className={'indent'}>{size}</Paragraph>;
};
