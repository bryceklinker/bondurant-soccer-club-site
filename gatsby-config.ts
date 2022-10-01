import type { GatsbyConfig } from 'gatsby';
import path from 'path';

const config: GatsbyConfig = {
    jsxRuntime: 'automatic',
    siteMetadata: {
        siteUrl: process.env.SITE_URL || 'http://localhost:3000',
        title: 'Bondurant Soccer Club',
        description: 'Official website of the Bondurant Soccer Club'
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
            resolve: 'gatsby-plugin-google-gtag',
            options: {
                trackingIds: [process.env.GOOGLE_MEASUREMENT_ID || ''],
                gtagConfig: {
                    anonymize_ip: true,
                    cookie_expires: 0
                },
                pluginConfig: {
                    head: false,
                    respectDNT: true
                }
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
        {
            resolve: 'gatsby-plugin-next-seo',
            options: {
                openGraph: {
                    type: 'website',
                    locale: 'en_us',
                    siteUrl: process.env.SITE_URL || 'http://localhost:3000',
                    site_name: 'Bondurant Soccer Club'
                }
            }
        }
    ]
};

export default config;
