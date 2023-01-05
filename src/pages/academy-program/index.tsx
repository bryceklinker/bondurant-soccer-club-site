import { Layout } from '../../common/layout/Layout';
import { AcademyProgramPage } from '../../components/academy-program/AcademyProgramPage';
import { Seo } from '../../common/seo/Seo';
import React from 'react';

export default () => (
    <Layout>
        <AcademyProgramPage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'Academy Program'}
        description={'Bondurant soccer club academy program information'}
        route={'academy-program'}
    />
);
