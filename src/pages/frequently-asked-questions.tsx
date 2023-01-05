import { FrequentlyAskedQuestionsPage } from '../components/frequently-asked-questions/FrequentlyAskedQuestionsPage';
import { Layout } from '../common/layout/Layout';
import { Seo } from '../common/seo/Seo';

export default () => (
    <Layout>
        <FrequentlyAskedQuestionsPage />
    </Layout>
);

export const Head = () => (
    <Seo
        title={'FAQ'}
        description={'Bondurant soccer club frequently asked questions'}
        route={'frequently-asked-questions'}
    />
);
