import { LocationsPage } from '../components/locations/LocationsPage';
import { Layout } from '../common/layout/Layout';
import { Seo } from '../common/seo/Seo';
import React from 'react';

export default () => (
    <Layout>
        <LocationsPage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'Locations'}
        description={'Find the locations for the Bondurant Soccer Club'}
        route={'locations'}
    />
);
