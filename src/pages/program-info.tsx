import { ProgramInfoPage } from '../components/program-info/ProgramInfoPage';
import { Layout } from '../common/layout/Layout';
import { Seo } from '../common/seo/Seo';
import React from 'react';

export default () => (
    <Layout>
        <ProgramInfoPage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'Program Info'}
        description={
            'Learn about the programs offered at Bondurant Soccer Club'
        }
        route={'program-info'}
    />
);
