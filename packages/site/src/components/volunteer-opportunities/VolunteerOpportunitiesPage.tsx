import React, { FunctionComponent } from 'react';
import { VolunteerOpportunityOption } from './VolunteerOpportunityOption';
import { GappedStack } from '../../common/components/GappedStack';
import { Title } from '../../common/components/Title';
import { useVolunteerOpportunitiesOptions } from './hooks';

export const VolunteerOpportunitiesPage: FunctionComponent = () => {
    const volunteerOpportunitiesOptions = useVolunteerOpportunitiesOptions();
    const options = volunteerOpportunitiesOptions.map((o, i) => (
        <VolunteerOpportunityOption key={i} data={o} />
    ));
    return (
        <GappedStack padded>
            <Title>Volunteer Opportunities</Title>

            {options}
        </GappedStack>
    );
};
