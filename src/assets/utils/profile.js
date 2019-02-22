const year = new Date().getFullYear();

const author = `Arthur Prather, Jr`;
const url = `https://aprather.net`;
const title = `Gatsby Starter Template by ${author}`;
const titleAlt = `Starter Template`;
const description = `The Gatsby V2 Starter Template by ${author}`;

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
