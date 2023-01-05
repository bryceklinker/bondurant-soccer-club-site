import { graphql, useStaticQuery } from 'gatsby';

type Site = {
    siteMetadata: {
        title: string;
        description: string;
        author: string;
        siteUrl: string;
    };
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
                    }
                }
            }
        `
    );
    return site.siteMetadata;
}
