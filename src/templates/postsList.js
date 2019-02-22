import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

/* Components-Post */
import { PostCard } from 'components-posts';

/* Commons */
import { Container, Grid } from 'commons';

const PostList = () => {
	return (
		<StaticQuery
			query={postListQuery}
			render={data => (
				<Container>
					<Grid smCols={1} medCols={2} lgCols={3}>
						{data.allMarkdownRemark.edges.map(({ node }, i) => (
							<PostCard
								key={i}
								date={node.frontmatter.date}
								image={node.frontmatter.image.childImageSharp.fluid}
								path={node.fields.slug}
								excerpt={node.excerpt}
								title={node.frontmatter.title}
							/>
						))}
					</Grid>
				</Container>
			)}
		/>
	);
};

export default PostList;

export const postListQuery = graphql`
	query PostListQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					fields {
						slug
					}
					excerpt(pruneLength: 100)
					frontmatter {
						date(formatString: "MMMM Do YYYY")
						title
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
		}
	}
`;
