import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { Section } from '../common/components/Section';
import { CollapsiblePanel } from '../common/components/CollapsiblePanel';
import { SectionTitle } from '../common/components/SectionTitle';
import { Paragraph } from '../common/components/Paragraph';
import { LocationData } from '../common/state/models';
import { RouteNames } from '../common/routing/route-names';

export type TreatTicketsProps = {
    location: LocationData;
};

export const TreatTickets: FunctionComponent<TreatTicketsProps> = ({
    location
}) => {
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>Treat Tickets</SectionTitle>}>
                <Paragraph>
                    Treat tickets are an easy way to cover team treats without
                    having to worry about food allergies or going to the store.
                </Paragraph>

                <Paragraph>
                    Options are available from $.50 to $2. Get yours today!
                </Paragraph>

                <Paragraph>
                    The concession stand is currently only available at the{' '}
                    <Link to={RouteNames.Locations}>{location.title}</Link>.
                </Paragraph>
            </CollapsiblePanel>
        </Section>
    );
};
