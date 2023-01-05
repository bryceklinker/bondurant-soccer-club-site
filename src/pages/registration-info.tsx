import { RegistrationInfoPage } from '../components/registration-info/RegistrationInfoPage';
import { Layout } from '../common/layout/Layout';
import { Seo } from '../common/seo/Seo';
import React from 'react';

export default () => (
    <Layout>
        <RegistrationInfoPage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'Registration Info'}
        description={'Sign your child up to play for Bondurant Soccer Club'}
        route={'registration-info'}
    />
);
