import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import config from 'assets/utils/profile';

/* Components */
import { Layout, SEO } from 'components';

/* Commons */
import { Container } from 'commons';

/* Components Posts */
import {
	PostHero,
	PostContent,
	PostDate,
	PostNextPrev,
	PostTags
} from 'components-posts';

const BlogPost = ({ data, pageContext }) => {
	const post = data.markdownRemark;
	const { date, title, tags } = post.frontmatter;
	const slug = post.fields.slug;

	const postNode = {
		title: ` ${config.title} - ${title}`
	};

	const prev = pageContext.prev;
	const next = pageContext.next;

	return (
		<Layout>
			<SEO postNode={postNode} pagePath={`${config.url + slug}`} customTitle />
			<Helmet>
				<title>{`${config.title} - ${title}`}</title>
				<link rel="canonical" href={`${config.url + slug}`} />
			</Helmet>
			<PostHero
				fluid={post.frontmatter.image.childImageSharp.fluid}
				title={title}
				height={'60vh'}
			/>

			<Container maxWidth={'960px'} padding={'1em'}>
				<PostDate date={date} />
				<PostTags tags={tags} />
				<PostContent post={{ __html: post.html }} />
				<PostNextPrev next={next && next.node} prev={prev && prev.node} />
			</Container>
		</Layout>
	);
};

export default BlogPost;

export const postQuery = graphql`
	query PostQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			fields {
				slug
			}
			frontmatter {
				title
				tags
				date(formatString: "MMMM Do YYYY")
				description
				image {
					childImageSharp {
						resize(width: 1500, height: 1500) {
							src
						}
						fluid(maxWidth: 1500) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
