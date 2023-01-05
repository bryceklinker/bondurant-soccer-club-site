import { HomePage } from '../components/home/HomePage';
import { Layout } from '../common/layout/Layout';
import { Seo } from '../common/seo/Seo';
import React from 'react';

export default () => (
    <Layout>
        <HomePage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'Home'}
        description={'Official home page of the Bondurant Soccer club'}
    />
);
