import { Layout } from '../common/layout/Layout';
import { VolunteerPage } from '../components/volunteer/VolunteerPage';
import { Seo } from '../common/seo/Seo';
import React from 'react';

export default () => (
    <Layout>
        <VolunteerPage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'Volunteer'}
        description={'Learn how to get involved at Bondurant Soccer Club'}
        route={'volunteer'}
        keywords={['involved', 'coaching', 'board', 'volunteer']}
    />
);
