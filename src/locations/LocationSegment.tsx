import { FC } from 'react';
import {
    Paragraph,
    Section,
    SubTitle,
    SectionTitle,
    EmbeddedMap,
    CollapsiblePanel
} from '../common/components';
import './LocationSegment.css';
import { ColumnFlex, RowFlex } from '../common/layout';
import { LocationData } from '../common/state';

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
                <RowFlex gap={'1em'} className={'location-section'}>
                    <ColumnFlex>
                        <SubTitle>Age Groups:</SubTitle>
                        {ageGroups}
                    </ColumnFlex>

                    <EmbeddedMap url={data.mapsUrl} />
                </RowFlex>
            </CollapsiblePanel>
        </Section>
    );
};
