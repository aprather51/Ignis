import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
// import SetImg from 'gatsby-image';
import theme from 'assets/styled/theme';
import styled from 'styled-components';

/* Commons */
import { Container, Grid, Img, Section, Title } from 'commons';

/* Gradient Color #1F1B58 & #9C520D visit https://mycolor.space/gradient?ori=to+top&hex=%231F1B58&hex2=%239C520D&sub=1 */
const Section2 = () => (
	<StaticQuery
		query={Icons}
		render={data => (
			<Section
				background={
					'linear-gradient(to top,#1f1b58,#5c1354,#841143,#992e2b,#9c520d)'
				}
			>
				<Container>
					<Grid lgCols={2} smCols={1} gaps={'3rem'}>
						<Grid lgCols={2} medCols={2} smCols={2}>
							<Img lgSize={'150px'} fluid={data.icon1.childImageSharp.fluid} />
							<Img lgSize={'150px'} fluid={data.icon2.childImageSharp.fluid} />
							<Img lgSize={'150px'} fluid={data.icon3.childImageSharp.fluid} />
							<Img lgSize={'150px'} fluid={data.icon4.childImageSharp.fluid} />
							<Img lgSize={'150px'} fluid={data.icon5.childImageSharp.fluid} />
							<Img lgSize={'150px'} fluid={data.icon6.childImageSharp.fluid} />
						</Grid>
						<Box>
							<Title color={`${theme.colors.secondary}`}>
								Lorem ipsum dolor sit amet consectetur.
							</Title>
							<hr />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Adipisci, a voluptates minus tempore aliquid beatae? Dolorem
								voluptates, ab nemo nostrum tempora aliquam delectus illum
								maxime ducimus repellat exercitationem voluptatum repudiandae
								amet fuga labore omnis dolorum ipsam accusantium ipsa
								recusandae! Eum, similique beatae cupiditate laborum sapiente
								molestias nihil eos nobis quam voluptatum maxime qui quisquam
								debitis? Eos distinctio est sunt accusantium quae? Accusamus id
								repudiandae harum officiis, quis officia laboriosam a explicabo
								non aspernatur eveniet architecto.
							</p>
						</Box>
					</Grid>
				</Container>
			</Section>
		)}
	/>
);

const Icons = graphql`
	fragment fluidIcon on File {
		childImageSharp {
			fluid(maxWidth: 500) {
				...GatsbyImageSharpFluid
			}
		}
	}

	query {
		icon1: file(relativePath: { eq: "camera.png" }) {
			...fluidImage
		}
		icon2: file(relativePath: { eq: "dab.png" }) {
			...fluidImage
		}
		icon3: file(relativePath: { eq: "development.png" }) {
			...fluidImage
		}
		icon4: file(relativePath: { eq: "fistBump.png" }) {
			...fluidImage
		}
		icon5: file(relativePath: { eq: "flash.png" }) {
			...fluidImage
		}
		icon6: file(relativePath: { eq: "happyDance.png" }) {
			...fluidImage
		}
	}
`;

export default Section2;

const Box = styled.div`
	hr {
		margin: 2em 0;
	}
	p {
		color: ${theme.colors.secondary};
		font-size: 1em;
		line-height: 1.8;
	}
`;
