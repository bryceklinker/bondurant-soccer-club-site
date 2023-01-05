import { ContactUsPage } from '../components/contact-us/ContactUsPage';
import { Layout } from '../common/layout/Layout';
import { Seo } from '../common/seo/Seo';
import React from 'react';

export default () => (
    <Layout>
        <ContactUsPage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'Contact Us'}
        description={'Contact Bondurant Soccer Club board members'}
        route={'contact-us'}
    />
);
