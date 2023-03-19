import { graphql, useStaticQuery } from 'gatsby';

export type SiteMetadata = {
    title: string;
    description: string;
    author: string;
    siteUrl: string;
    clientId: string;
};

type Site = {
    siteMetadata: SiteMetadata;
};

export function useSiteMetadata() {
    const { site } = useStaticQuery<{ site: Site }>(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        siteUrl
                        clientId
                    }
                }
            }
        `
    );
    return site.siteMetadata;
}
