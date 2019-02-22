import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

/* Commons */
import { Container, Grid, Img, Section, Title } from 'commons';

const Section1 = () => (
	<div>
		<StaticQuery
			query={Images}
			render={data => (
				<Section>
					<Container>
						<Grid lgCols={2} smCols={1} gaps={'3rem'} margin={'2em 0'}>
							<Box>
								<Title>Lorem ipsum dolor sit amet consectetur.</Title>
								<hr />
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Adipisci, a voluptates minus tempore aliquid beatae? Dolorem
									voluptates, ab nemo nostrum tempora aliquam delectus illum
									maxime ducimus repellat exercitationem voluptatum repudiandae
									amet fuga labore omnis dolorum ipsam accusantium ipsa
									recusandae! Eum, similique beatae cupiditate laborum sapiente
									molestias nihil eos nobis quam voluptatum maxime qui quisquam
									debitis? Eos distinctio est sunt accusantium quae? Accusamus
									id repudiandae harum officiis, quis officia laboriosam a
									explicabo non aspernatur eveniet architecto.
								</p>
							</Box>
							<div>
								<Img fluid={data.image1.childImageSharp.fluid} />
							</div>
						</Grid>
					</Container>
				</Section>
			)}
		/>
	</div>
);

const Images = graphql`
	fragment fluidImage on File {
		childImageSharp {
			fluid(maxWidth: 500) {
				...GatsbyImageSharpFluid
			}
		}
	}

	query {
		image1: file(relativePath: { eq: "pic01.png" }) {
			...fluidImage
		}
	}
`;

export default Section1;

/* Styled */
const Box = styled.div`
	hr {
		margin: 2em 0;
	}
	p {
		font-size: 1em;
		line-height: 1.8;
	}
`;
