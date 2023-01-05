import { ConcessionsPage } from '../components/concessions/ConcessionsPage';
import { Layout } from '../common/layout/Layout';
import { Seo } from '../common/seo/Seo';
import React from 'react';

export default () => (
    <Layout>
        <ConcessionsPage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'Concessions'}
        description={'Bondurant Soccer Club concession stand info'}
        route={'concessions'}
    />
);
