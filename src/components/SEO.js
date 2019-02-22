import React from 'react';
import Helmet from 'react-helmet';
import config from 'assets/utils/profile';

// info: To update or change SEO, go into configuration via ./assets/utils/config

const SEO = props => {
	const { postNode, pagePath, postSEO, pageSEO, customTitle } = props;
	let title;
	let description;
	let image;
	let imgWidth;
	let imgHeight;
	let pageURL;

	const contentURL = config.siteUrl + config.pathPrefix;
	const truePrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

	// Set Default OpenGraph Parameters for Fallback
	title = config.siteTitle;
	description = config.siteDescription;

	//Set Default Image Parameter for fallback
	image = config.image || postNode.frontmatter.image.childImageSharp.resize.src;
	imgWidth = config.imageWidth;
	imgHeight = config.imageHeight;
	pageURL = config.url;

	if (customTitle) {
		title = postNode.title;
		pageURL = config.url + '/' + pagePath + '/';
	}

	// Replace with Page Parameters if post or page
	if (postSEO || pageSEO) {
		title = postNode.title;
		description =
			postNode.metaDescription === null
				? postNode.body.childMarkdownRemark.excerpt
				: postNode.metaDescription.internal.content;

		pageURL = config.url + '/' + pagePath + '/';
	}

	//SEO on content posts eg events, blogs or etc.
	if (postSEO) {
		const postMeta = postNode.frontmatter;

		title = postMeta.title;
		description = postNode.excerpt || description;
		image = postMeta.image.childImageSharp.resize.src;
		pageURL = config.url + truePrefix + pagePath;
	} else {
		title = config.title;
		description = config.description;
		image = config.logo;
	}

	// Default Website Schema
	let schemaOrgJSONLD = [
		{
			'@context': 'http://schema.org',
			'@type': 'WebSite',
			'@id': contentURL,
			url: contentURL,
			name: title,
			alternateName: config.titleAlt ? config.titleAlt : ''
		}
	];

	// Blog Post Schema
	if (postSEO) {
		schemaOrgJSONLD.push(
			{
				'@context': 'http://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: [
					{
						'@type': 'ListItem',
						position: 1,
						item: {
							'@id': contentURL,
							name: title
						}
					},
					{
						'@type': 'ListItem',
						position: 2,
						item: {
							'@id': pageURL,
							name: title
						}
					}
				]
			},
			{
				'@context': 'http://schema.org',
				'@type': 'BlogPosting',
				url: pageURL,
				name: title,
				alternateName: config.titleAlt ? config.titleAlt : '',
				headline: title,
				image: {
					'@type': 'ImageObject',
					url: image,
					width: imgWidth,
					height: imgHeight
				},
				datePublished: postNode.frontmatter.date,
				dateModified: postNode.frontmatter.date,
				isPartOf: contentURL,
				mainEntityOfPage: {
					'@type': 'WebSite',
					'@id': contentURL
				}
			}
		);
	}

	// Page SEO Schema
	if (pageSEO) {
		schemaOrgJSONLD.push({
			'@context': 'http://schema.org',
			'@type': 'WebPage',
			url: pageURL,
			name: title
		});
	}

	return (
		<Helmet>
			{/* General tags */}
			<html lang={config.siteLanguage} />
			{/* <Title>Will be assigned on every page <SEO></Title> */}
			<meta name="image" content={image} />
			<meta name="description" content={description} />

			{/* Schema.org tags */}
			<script type="application/ld+json">
				{JSON.stringify(schemaOrgJSONLD)}
			</script>

			{/* OpenGraph tags */}
			<meta property="og:title" content={title} />
			{postSEO ? <meta property="og:type" content="article" /> : null}
			<meta property="og:locale" content={config.ogLanguage} />
			<meta property="og:url" content={pageURL} />
			<meta property="og:url" content={postSEO ? pageURL : contentURL} />
			<meta property="og:image" content={image} />
			<meta property="og:image:width" content={imgWidth} />
			<meta property="og:image:height" content={imgHeight} />
			<meta property="og:description" content={description} />

			{/* Twitter Card tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta
				name="twitter:creator"
				content={config.userTwitter ? config.userTwitter : ''}
			/>
			<meta name="twitter:title" content={title} />
			<meta name="twitter:image" content={image} />
			<meta name="twitter:description" content={description} />
		</Helmet>
	);
};

export default SEO;
