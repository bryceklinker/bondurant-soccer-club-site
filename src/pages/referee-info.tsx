import { RefereeInfoPage } from '../components/referee-info/RefereeInfoPage';
import { Layout } from '../common/layout/Layout';
import { Seo } from '../common/seo/Seo';
import React from 'react';

export default () => (
    <Layout>
        <RefereeInfoPage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'Referee Info'}
        description={
            'Learn how to become a referee for the Bondurant Soccer Club'
        }
        route={'referee-info'}
    />
);
