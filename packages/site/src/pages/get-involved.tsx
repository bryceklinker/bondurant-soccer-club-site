import { GetInvolvedPage } from '../components/get-involved/GetInvolvedPage';
import { Layout } from '../common/layout/Layout';
import { Seo } from '../common/seo/Seo';
import React from 'react';

export default () => (
    <Layout>
        <GetInvolvedPage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'Get Involved'}
        description={'Learn how to get involved at Bondurant Soccer Club'}
        route={'get-involved'}
        keywords={['involved', 'coaching', 'board']}
    />
);
