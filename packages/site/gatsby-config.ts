import type { GatsbyConfig } from 'gatsby';
import path from 'path';

const plugins = [];
if (process.env.GOOGLE_MEASUREMENT_ID) {
    plugins.push({
        resolve: 'gatsby-plugin-google-gtag',
        options: {
            trackingIds: [process.env.GOOGLE_MEASUREMENT_ID],
            gtagConfig: {
                anonymize_ip: true,
                cookie_expires: 0
            },
            pluginConfig: {
                head: false,
                respectDNT: true
            }
        }
    });
}

if (process.env.GOOGLE_TAG_MANAGER_ID) {
    plugins.push({
        resolve: 'gatsby-plugin-google-tagmanager',
        options: {
            id: process.env.GOOGLE_TAG_MANAGER_ID,
            includeInDevelopment: false,
            defaultDataLayer: { platform: 'gatsby' },
            enableWebVitalsTracking: true
        }
    });
}

const config: GatsbyConfig = {
    jsxRuntime: 'automatic',
    siteMetadata: {
        siteUrl: process.env.SITE_URL || 'http://localhost:3000',
        title: 'Bondurant Soccer Club',
        description: 'Official website of the Bondurant Soccer Club',
        clientId:
            process.env.GOOGLE_AUTH_CLIENT_ID ??
            '672664614504-rqd6lg32u1u52v0bqdr4ae6jpo712hob.apps.googleusercontent.com'
    },
    plugins: [
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: path.resolve(__dirname, 'src', 'assets')
            }
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-robots-txt',
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-web-vitals',
            options: {
                metrics: ['FID', 'TTFB', 'LCP', 'CLS', 'FCP'],
                eventCategory: 'Performance',
                includeInDevelopment: false,
                debug: false
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Bondurant Soccer Club',
                short_name: 'BSC',
                start_url: '/',
                display: 'minimal-ui',
                icon: path.resolve(__dirname, 'src', 'assets', 'logo.ico')
            }
        },
        ...plugins,
        'gatsby-plugin-client-side-redirect'
    ]
};

export default config;
