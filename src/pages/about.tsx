import { AboutPage } from '../components/about/AboutPage';
import { Layout } from '../common/layout/Layout';
import { Seo } from '../common/seo/Seo';

export default () => (
    <Layout>
        <AboutPage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'About'}
        description={'About Bondurant Soccer Club'}
        route={'about'}
    />
);
