import { PictureDayPage } from '../components/picture-day/PictureDayPage';
import { Layout } from '../common/layout/Layout';
import { Seo } from '../common/seo/Seo';
import React from 'react';

export default () => (
    <Layout>
        <PictureDayPage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'Picture Day'}
        description={'Learn when picture day is at Bondurant Soccer Club'}
        route={'picture-day'}
        keywords={['pictures']}
    />
);
