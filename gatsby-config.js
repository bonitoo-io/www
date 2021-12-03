/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    pathPrefix: `/`,
    siteMetadata: {
        title: "Bonitoo.io R&D Services",
        titleTemplate: `Bonitoo.io`,
        description: `Professional R&D studio that aims to provide end to end software development projects and services.`,
        author: `@HasThemes`,
        twitterUsername: `@HasThemes`,
        image: "landing.png",
        siteUrl: "https://bonitoo.io/",
        canonical: "https://bonitoo.io/",
        getform: "https://getform.io/f/22b43bd4-29a7-4795-ba95-6abfe8bf1f39",
        copyright:
            "Bonitoo.io <a href='https://bonitoo.io/' target='_blank' rel='noopener noreferrer'>All Rights Reserved.</a>",
        siteLanguage: "en",
        socials: [
            {
                id: 1,
                icon: "fab fa-facebook-f",
                link: "https://www.facebook.com/bonitoo.io/",
                title: "Facebook",
            },
            {
                id: 2,
                icon: "fab fa-github",
                link: "https://github.com/bonitoo-io",
                title: "Github",
            },
            {
                id: 3,
                icon: "fab fa-linkedin",
                link: "https://www.linkedin.com/company/bonitoo-io",
                title: "Linkedin",
            },
        ],
        contact: {
            phone: "(+420) 725 526 409",
            address: "Kytlická 758, Praha 9, 190 00 CZ",
            email: "info@bonitoo.io",
            website: "https://www.bonitoo.io/",
            rating: "4.9",
            customers: "20",
            clients: "3200",
        },
    },
    // mapping: {
    // 	"MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
    // },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        "gatsby-transformer-json",
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                excerpt_separator: `<!-- endexcerpt -->`,
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `fonts`,
                path: `${__dirname}/src/assets/fonts`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Mitech",
                short_name: "mitech",
                theme_color: "#086ad8",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
                icons: [
                    {
                        src: "/icons/icon-72x72.png",
                        sizes: "72x72",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-96x96.png",
                        sizes: "96x96",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-128x128.png",
                        sizes: "128x128",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-144x144.png",
                        sizes: "144x144",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-152x152.png",
                        sizes: "152x152",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-384x384.png",
                        sizes: "384x384",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-breadcrumb`,
            options: {
                useAutoGen: true,
                autoGenHomeLabel: `Home`,
                exclude: [`/dev-404-page`, `/404`, `/404.html`],
                useClassNames: true,
            },
        },
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "https://bonitoo.io/",
                sitemap: "https://bonitoo.io/sitemap.xml",
                policy: [{ userAgent: "*", allow: "/" }],
            },
        },
    ],
};
