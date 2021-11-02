import path from 'path';
import React from 'react';

export default {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    extractCssChunks: true,
    getRoutes: async () => {
        return [];
    },
    plugins: [
        [
            require.resolve('react-static-plugin-source-filesystem'),
            {
                location: path.resolve('./src/pages'),
            },
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap'),
        require.resolve('react-static-plugin-typescript')
    ],
    Document: ({
                   Html,
                   Head,
                   Body,
                   children,
                   state: {siteData, renderMeta},
               }) => (
        <Html lang="en-US">
            <Head>
                <meta charSet="UTF-8"/>
                <link rel="icon" href="./favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Bondurant Soccer Club</title>
                <meta name={'description'} content={'Official Bondurant Soccer Club website'} />
            </Head>
            <Body>{children}</Body>
        </Html>
    ),
};
