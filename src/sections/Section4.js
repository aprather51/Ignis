import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

/* Commons */
import { Container, Grid, Img, Section, Title } from 'commons';

const Section4 = () => (
	<StaticQuery
		query={graphql`
			query allImgQuery {
				source: allFile(filter: { absolutePath: { regex: "/teams/" } }) {
					edges {
						node {
							childImageSharp {
								fluid(maxWidth: 2000) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		`}
		render={data => (
			<Section
				background={
					'linear-gradient(to left top, #1f1b58, #5c1354, #841143, #992e2b, #9c520d)'
				}
			>
				<Container padding={'20px'}>
					<Title align={'center'} color={'#efefef'}>
						Our Teams
					</Title>
					<Grid smCols={3} medCols={3} lgCols={6}>
						{data.source.edges.map(({ node }, i) => (
							<Img key={i} size={'80%'} fluid={node.childImageSharp.fluid} />
						))}
					</Grid>
				</Container>
			</Section>
		)}
	/>
);
export default Section4;
