import { graphql, useStaticQuery } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
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
    const seoDescription = description || site.siteMetadata.description;
    const url = route
        ? `${site.siteMetadata.siteUrl}/${route}`
        : site.siteMetadata.siteUrl;
    return (
        <GatsbySeo
            title={title}
            titleTemplate={seoFriendlyTitle}
            description={seoDescription}
            htmlAttributes={{
                language: 'en'
            }}
            metaTags={[
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1.0'
                },
                {
                    name: 'description',
                    content: seoDescription
                },
                {
                    property: 'og:title',
                    content: title || site.siteMetadata.title
                },
                {
                    property: 'og:description',
                    content: seoDescription
                },
                {
                    property: 'og:url',
                    content: url
                },
                {
                    property: 'og:type',
                    content: 'website'
                }
            ]}
            openGraph={{
                title: seoFriendlyTitle,
                type: 'website',
                description: seoDescription,
                url: url
            }}
        />
    );
};
