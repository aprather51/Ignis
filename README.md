# Ignis 🔥

My Full Customized Starter Template for Gatsby called 'Ignis' which mean fire in latin. 

![My Gatsby Starter Template](./template.gif)

<div align="center">

[![Generic badge](https://img.shields.io/badge/Version-v1.01-yellow.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/build-passing-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/deploy-netlify-darkcyan.svg)](https://shields.io/)
</div>

## Feature
- Single page layouts.
- React 16
- Blog/Posts
- Contact form 
- Footer ready with SVG social media.
- Custom config settings.
- SEO settings. 
- Customized reuse components using styled-component & polished.
- Animated with react-spring.

## Installation
`gatsby-cli`
```sh
gatsby new <your project name> https://github.com/aprather51/Ignis.git
```

## Clone
`git clone`
```sh
git clone https://github.com/aprather51/Ignis.git
```

After clone, Be sure to remove `.git` and set up new one.
```sh
rm -rf .git && git init
```


## Usage
Run on develop mode
```sh
#develop
yarn start
```

Build
```sh
#build with gatsby
yarn build
```

Build and Deploy with Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/netlify-statuskit)



## Customization
Website data for SEO
```
/src/assets/utils/profile.js
```

Edit...
```js
const year = new Date().getFullYear();

const author = `Your Name`;
const url = `Your Url`;
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

```
Replace Favicon
```
/src/favicon/icon.png
```

## Author
Arthur Prather, Jr — [@aprather51](https://github.com/aprather51)

## License
This project is open source and available under the [MIT LICENSE](https://github.com/aprather51/Ignis/blob/master/LICENSE)

