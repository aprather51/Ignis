const year = new Date().getFullYear();

const author = `Your Name`;
const url = `Your URL`;
const title = `Ignis by ${author}`;
const titleAlt = `Ignis Starter Template`;
const description = `The Ignis Starter Template for Gatsby V2`;

module.exports = {
	pathPrefix: '/',

	/* Site info */
	title: `${title}`,
	titleAlt: `${titleAlt}`,
	description: `${description}`,
	url: `${url}`,
	language: 'en',
	favicon: 'src/assets/favicon/icon.png',
	logo: 'src/assets/images/logo.png',
	author: `${author}`,
	copyright: `Copyright © ${year} by, ${author} — All Rights Reserved.`,

	/* Image */
	image: 'src/assets/images/logo.png',
	imageWidth: '1024',
	imageHeight: '482',

	/* Manifest color */
	themeColor: `#000`,
	bgColor: `#fff`,

	/* Open Graph */
	ogSiteName: 'N/A',
	ogLanguage: 'en_US',

	/* Social Media Links */
	Twitter: ``,
	Facebook: ``,
	Instagram: ``,
	LinkedIn: ``
};
