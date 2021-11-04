import path from 'path';
import React from 'react';
import {Stylesheet} from '@fluentui/react';

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
               }) => {
        const stylesheet = Stylesheet.getInstance();
        const styleTags = stylesheet.getRules(true);
        const serializedStylesheet = stylesheet.serialize();
        return (
            <Html lang="en-US">
                <Head>
                    <meta charSet="UTF-8"/>
                    <link rel="icon" href="./favicon.ico"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link href='http://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css' />
                    <title>Bondurant Soccer Club</title>
                    <meta name={'description'} content={'Official Bondurant Soccer Club website'}/>
                    <style type={'text/css'} dangerouslySetInnerHTML={{__html: styleTags}}/>
                    <script type={'text/javascript'} dangerouslySetInnerHTML={{
                        __html: `
                        window.FabricConfig = window.FabricConfig || {};
                        window.FabricConfig.serializedStylesheet = ${serializedStylesheet}
                        `
                    }}/>
                </Head>
                <Body>
                    {children}
                </Body>
            </Html>
        );
    },
};
