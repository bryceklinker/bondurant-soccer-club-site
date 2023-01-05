import { DocumentsPage } from '../components/documents/DocumentsPage';
import { Layout } from '../common/layout/Layout';
import { Seo } from '../common/seo/Seo';

export default () => (
    <Layout>
        <DocumentsPage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'Documents'}
        description={'View common Bondurant Soccer Club documents'}
        route={'documents'}
    />
);
