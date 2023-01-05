import { SponsorshipInfoPage } from '../components/sponsorship-info/SponsorshipInfoPage';
import { Layout } from '../common/layout/Layout';
import { Seo } from '../common/seo/Seo';
import React from 'react';

export default () => (
    <Layout>
        <SponsorshipInfoPage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'Sponsorship Info'}
        description={
            'Learn how to become a sponsor for the Bondurant Soccer Club'
        }
        route={'sponsorship-info'}
    />
);
