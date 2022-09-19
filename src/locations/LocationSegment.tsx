import {FunctionComponent} from 'react';
import {Paragraph, Section, SubTitle, SectionTitle, EmbeddedMap, CollapsiblePanel, LocationData} from '../common';
import {HStack, VStack} from '@chakra-ui/react';

export interface LocationSegmentProps {
    data: LocationData;
}

export const LocationSegment: FunctionComponent<LocationSegmentProps> = ({data}) => {
    const ageGroups = data.ageGroups.map((a, i) => <Paragraph key={i}>{a.name}</Paragraph>);
    return (
        <Section shadow padded>
            <CollapsiblePanel title={<SectionTitle>{data.title}</SectionTitle>}>
                <HStack gap={'1em'} className={'location-section'}>
                    <VStack>
                        <SubTitle>Age Groups:</SubTitle>
                        {ageGroups}
                    </VStack>

                    <EmbeddedMap url={data.mapsUrl}/>
                </HStack>

            </CollapsiblePanel>
        </Section>
    );
};
