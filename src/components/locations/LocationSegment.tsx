import { FC } from 'react';
import { LocationData } from '../../common/state/models';
import { Paragraph } from '../../common/components/Paragraph';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import { RowFlex } from '../../common/layout/RowFlex';
import { SectionTitle } from '../../common/components/SectionTitle';
import { SubTitle } from '../../common/components/SubTitle';
import { EmbeddedMap } from '../../common/components/EmbeddedMap';

export type LocationSegmentProps = {
    data: LocationData;
};

export const LocationSegment: FC<LocationSegmentProps> = ({ data }) => {
    const ageGroups = data.ageGroups.map((a, i) => (
        <Paragraph key={i}>{a.name}</Paragraph>
    ));
    return (
        <Section shadow padded>
            <CollapsiblePanel title={<SectionTitle>{data.title}</SectionTitle>}>
                <RowFlex className={'gap-4'}>
                    <ColumnFlex className={'flex-initial'}>
                        <SubTitle>Age Groups:</SubTitle>
                        {ageGroups}
                    </ColumnFlex>

                    <EmbeddedMap url={data.mapsUrl} />
                </RowFlex>
            </CollapsiblePanel>
        </Section>
    );
};
