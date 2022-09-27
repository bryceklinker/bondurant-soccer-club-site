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
        'gatsby-plugin-react-helmet',
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
            resolve: '@chakra-ui/gatsby-plugin',
            options: {
                resetCSS: true,
                isUsingColorMode: true
            }
        }
    ]
};

export default config;
