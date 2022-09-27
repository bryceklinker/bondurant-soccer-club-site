import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { FC } from 'react';

type Site = {
    siteMetadata: {
        title: string;
        description: string;
        author: string;
        siteUrl: string;
    };
};

export type SeoProps = {
    description?: string;
    title?: string;
    route?: string;
};

export const Seo: FC<SeoProps> = ({ description, title, route }: SeoProps) => {
    const { site } = useStaticQuery<{ site: Site }>(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        siteUrl
                    }
                }
            }
        `
    );

    const seoFriendlyTitle =
        title && title.length > 50 ? title : `%s - ${site.siteMetadata.title}`;
    return (
        <Helmet
            htmlAttributes={{ lang: 'en' }}
            title={title}
            titleTemplate={seoFriendlyTitle}
            defaultTitle={site.siteMetadata.title}
            meta={[
                {
                    name: 'description',
                    content: description || site.siteMetadata.description
                },
                {
                    property: 'og:title',
                    content: title || site.siteMetadata.title
                },
                {
                    property: 'og:description',
                    content: description || site.siteMetadata.description
                },
                {
                    property: 'og:url',
                    content: route
                        ? `${site.siteMetadata.siteUrl}/${route}`
                        : site.siteMetadata.siteUrl
                },
                {
                    property: 'og:type',
                    content: 'website'
                }
            ]}
        />
    );
};
