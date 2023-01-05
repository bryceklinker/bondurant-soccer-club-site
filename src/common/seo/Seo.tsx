import { FC } from 'react';
import { useSiteMetadata } from './hooks';

export type SeoProps = {
    description?: string;
    title?: string;
    route?: string;
    keywords?: string[];
};

export const Seo: FC<SeoProps> = ({
    description,
    title,
    route,
    keywords
}: SeoProps) => {
    const metadata = useSiteMetadata();
    const seoDescription = description || metadata.description;
    const url = route ? `${metadata.siteUrl}/${route}` : metadata.siteUrl;
    const fullTitle = `${title} | ${metadata.title}`;
    const seoFriendlyTitle = fullTitle.length > 50 ? title : fullTitle;
    const seoKeywords = (keywords || []).concat(
        'soccer',
        'bondurant',
        'club',
        'youth',
        'kids',
        'children',
        'official'
    );
    return (
        <>
            <title>{fullTitle}</title>
            <meta name={'description'} content={seoDescription} />
            <meta property={'og:type'} content={'website'} />
            <meta property={'og:site_name'} content={'Bondurant Soccer Club'} />
            <meta property={'og:locale'} content={'en_us'} />
            <meta property={'og:title'} content={seoFriendlyTitle} />
            <meta property={'og:description'} content={seoDescription} />
            <meta property={'og:url'} content={url} />
            <meta property={'keywords'} content={seoKeywords.join(',')} />
            <script
                type={'application/ld+json'}
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'NewsArticle',
                        headline: seoFriendlyTitle,
                        datePublished: new Date().toISOString(),
                        image: [`${metadata.siteUrl}/favicon-32x32.png`],
                        author: [
                            {
                                '@type': 'Organization',
                                name: 'Bondurant Soccer Club',
                                url: metadata.siteUrl
                            }
                        ]
                    })
                }}
            />
        </>
    );
};
