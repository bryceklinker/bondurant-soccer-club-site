import React, { FunctionComponent } from 'react';
import { Paragraph } from '../../../common/components/Paragraph';
import { RouteNames } from '../../../common/routing/route-names';
import { LocationData } from '../../../common/state/location-data';
import { SmartLink } from '../../../common/components/SmartLink';
import { SubTitle } from '../../../common/components/SubTitle';

export type TreatTicketsProps = {
    location: LocationData;
};

export const TreatTickets: FunctionComponent<TreatTicketsProps> = ({
    location
}) => {
    return (
        <>
            <SubTitle>Treat Tickets</SubTitle>
            <Paragraph>
                Treat tickets are an easy way to cover team treats without
                having to worry about food allergies or going to the store.
            </Paragraph>

            <Paragraph>
                Options are available from $.50 to $2. Get yours today!
            </Paragraph>

            <Paragraph>
                The concession stand is currently only available at the{' '}
                <SmartLink
                    link={{ text: location.title, url: RouteNames.Locations }}
                />
            </Paragraph>
        </>
    );
};
