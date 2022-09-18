import {FunctionComponent} from 'react';
import {CollapsiblePanel, LocationData, Paragraph, RouteNames, Section, SectionTitle} from '../common';
import Link from 'next/link';

export interface TreatTicketsProps {
    location: LocationData;
}

export const TreatTickets: FunctionComponent<TreatTicketsProps> = ({location}) => {
    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>Treat Tickets</SectionTitle>}>
                <Paragraph>
                    Treat tickets are an easy way to cover team treats without having to worry about food allergies or going to the store.
                </Paragraph>

                <Paragraph>
                    Options are available from $.50 to $2. Get yours today!
                </Paragraph>

                <Paragraph>
                    The concession stand is currently only available at the <Link href={RouteNames.Locations}>{location.title}</Link>.
                </Paragraph>
            </CollapsiblePanel>
        </Section>
    )
}
