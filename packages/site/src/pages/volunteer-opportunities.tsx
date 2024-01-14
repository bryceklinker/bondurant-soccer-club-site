import {Layout} from '../common/layout/Layout';
import {VolunteerOpportunitiesPage} from '../components/volunteer-opportunities/VolunteerOpportunitiesPage';
import {Seo} from '../common/seo/Seo';
import React from 'react';

export default () => (
    <Layout>
        <VolunteerOpportunitiesPage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'Volunteer Opportunities'}
        description={'Learn how to get involved at Bondurant Soccer Club'}
        route={'volunteer-opportunities'}
        keywords={['involved', 'coaching', 'board', 'volunteer', 'opportunities']}
    />
);
