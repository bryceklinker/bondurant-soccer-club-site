import { FunctionComponent } from 'react';
import { SectionTitle } from '../../common/components/SectionTitle';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { Section } from '../../common/components/Section';
import { Paragraph } from '../../common/components/Paragraph';
import { ExternalLink } from '../../common/components/ExternalLink';
import { SubTitle } from '../../common/components/SubTitle';
import { Numbers } from '../../common/extensions/numbers';
import { LinkData } from '../../common/state/link-data';
import { UniformSize } from '../../common/state/uniform-size';
import { UniformPurchaseOption } from '../../common/state/uniform-purchase-option';
import { StaticImage } from 'gatsby-plugin-image';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import { SizeChartTable } from './SizeChartTable';
import { SizeComparisonTable } from './SizeComparisonTable';
import { useSizeChartDownload } from './hooks';

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

    const sizeChartDownload = useSizeChartDownload();
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
                <ul className={'list-none'}>{purchaseItems}</ul>

                <Paragraph>
                    Jerseys and shorts do not have to be ordered in the same
                    size so you are able to customize the uniform to fit your
                    needs. Sizes available for jerseys and shorts are:
                </Paragraph>

                {sizeChartDownload && (
                    <a href={sizeChartDownload.publicURL} download>
                        <SubTitle>Official Score Sizing Details</SubTitle>
                    </a>
                )}

                <SizeChartTable />
                <SizeComparisonTable />
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
