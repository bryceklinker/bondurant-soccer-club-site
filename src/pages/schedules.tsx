import { SchedulesPage } from '../components/schedules/SchedulesPage';
import { Layout } from '../common/layout/Layout';
import { Seo } from '../common/seo/Seo';
import React from 'react';

export default () => (
    <Layout>
        <SchedulesPage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'Schedules'}
        description={
            'View game schedules for teams of the Bondurant Soccer Club'
        }
        route={'schedules'}
    />
);
