const profile = require('./src/assets/utils/profile');
const pathPrefix = profile.pathPrefix === '/' ? '' : profile.pathPrefix;

module.exports = {
	pathPrefix: profile.path,
	siteMetadata: {
		title: profile.title,
		description: profile.description,
		author: profile.author,
		copyright: profile.copyright
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-resolve-src`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-catch-links`,
		{
			/* Images */
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`
			}
		},
		{
			/* Icons */
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `icons`,
				path: `${__dirname}/src/assets/icons`
			}
		},
		{
			/* Teams Logos */
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `teams`,
				path: `${__dirname}/src/assets/teams`
			}
		},
		{
			/* Blog Post */
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `blog`,
				path: `${__dirname}/src/posts`
			}
		},

		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 600
							// linkImagesToOriginal: false
						}
					},
					'gatsby-remark-prismjs'
				]
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: profile.title,
				short_name: profile.titleAlt,
				start_url: profile.pathPrefix,
				background_color: profile.bgColor,
				theme_color: profile.themeColor,
				display: `minimal-ui`,
				icon: profile.favicon
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
