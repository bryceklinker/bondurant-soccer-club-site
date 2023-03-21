import { U5U6InfoPage } from '../components/u5-u6-info/U5U6InfoPage';
import { Layout } from '../common/layout/Layout';
import { Seo } from '../common/seo/Seo';
import React from 'react';

export default () => (
    <Layout>
        <U5U6InfoPage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'U5/U6 Program Info'}
        description={'Learn about U5/U6 program at the Bondurant Soccer Club'}
        route={'u5-u6-info'}
        keywords={['u5', 'u6']}
    />
);
