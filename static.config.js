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
        const measurementId = process.env.GOOGLE_MEASUREMENT_ID;
        return (
            <Html lang="en-US">
                <Head>
                    <meta charSet="UTF-8"/>
                    <link rel="icon" href="./favicon.ico"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700;900&display=swap"
                          rel="stylesheet"/>
                    <title>Bondurant Soccer Club</title>
                    <meta name={'description'} content={'Official Bondurant Soccer Club website'}/>
                    <style type={'text/css'} dangerouslySetInnerHTML={{__html: styleTags}}/>
                    <script type={'text/javascript'} dangerouslySetInnerHTML={{
                        __html: `
                        window.FabricConfig = window.FabricConfig || {};
                        window.FabricConfig.serializedStylesheet = ${serializedStylesheet}
                        `
                    }}/>
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}/>
                    <script type={'text/javascript'} dangerouslySetInnerHTML={{__html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', '${measurementId}');
                    `}} />
                </Head>
                <Body>
                    {children}
                </Body>
            </Html>
        );
    },
};
