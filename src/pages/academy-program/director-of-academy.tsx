import { Layout } from '../../common/layout/Layout';
import { DirectorOfAcademyPage } from '../../components/academy-program/director-of-academy/DirectorOfAcademyPage';
import { Seo } from '../../common/seo/Seo';

export default () => {
    return (
        <Layout>
            <DirectorOfAcademyPage />
        </Layout>
    );
};

export const Head = () => (
    <Seo
        title={'Director of Academy'}
        description={'Bondurant soccer club academy director'}
        route={'director-of-academy'}
    />
);
