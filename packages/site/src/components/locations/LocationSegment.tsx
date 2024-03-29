import { FC } from 'react';
import { Paragraph } from '../../common/components/Paragraph';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import { RowFlex } from '../../common/layout/RowFlex';
import { SectionTitle } from '../../common/components/SectionTitle';
import { SubTitle } from '../../common/components/SubTitle';
import { EmbeddedMap } from '../../common/components/EmbeddedMap';
import { LocationData } from '../../common/state/location-data';
import { FieldLayout } from './FieldLayout';

export type LocationSegmentProps = {
    data: LocationData;
};

export const LocationSegment: FC<LocationSegmentProps> = ({ data }) => {
    const ageGroups = data.ageGroups.map((a, i) => (
        <Paragraph key={i}>{a.name}</Paragraph>
    ));
    const fieldLayouts = data.fieldLayouts.map((l, i) => (
        <FieldLayout key={i} data={l} />
    ));
    return (
        <Section shadow padded>
            <CollapsiblePanel title={<SectionTitle>{data.title}</SectionTitle>}>
                <ColumnFlex className={'gap-4'}>
                    <ColumnFlex className={'flex-initial'}>
                        <SubTitle>Age Groups:</SubTitle>
                        <RowFlex className={'gap-2'}>{ageGroups}</RowFlex>
                    </ColumnFlex>

                    <ColumnFlex>
                        <SubTitle>Address</SubTitle>
                        <address>
                            {data.address.streetAddress}
                            <br />
                            {data.address.city},&nbsp;{data.address.state}&nbsp;
                            {data.address.zip}
                        </address>
                    </ColumnFlex>

                    <CollapsiblePanel title={<SectionTitle>Map</SectionTitle>}>
                        <EmbeddedMap url={data.mapsUrl} />
                    </CollapsiblePanel>

                    <CollapsiblePanel
                        title={<SectionTitle>Field Layouts</SectionTitle>}>
                        {fieldLayouts}
                    </CollapsiblePanel>
                </ColumnFlex>
            </CollapsiblePanel>
        </Section>
    );
};
