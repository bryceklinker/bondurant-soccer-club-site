import { UniformInfoPage } from '../components/uniform-info/UniformInfoPage';
import { Layout } from '../common/layout/Layout';
import { Seo } from '../common/seo/Seo';
import React from 'react';

export default () => (
    <Layout>
        <UniformInfoPage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'Uniform Info'}
        description={'Learn about the uniforms for the Bondurant Soccer Club'}
        route={'uniform-info'}
        keywords={['uniforms']}
    />
);
