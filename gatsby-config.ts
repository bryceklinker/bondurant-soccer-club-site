import type { GatsbyConfig } from "gatsby"
import path from 'path';

const config: GatsbyConfig = {
    siteMetadata: {
        siteUrl: process.env.SITE_URL,
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
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
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
        }
    ]
};

export default config;
