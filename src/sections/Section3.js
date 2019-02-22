import React from 'react';

/* Commons */
import { Container, LinkButton, Section } from 'commons';

/* Template */
import { ThreePostsList } from 'templates';

const Section3 = () => (
	<Section>
		<Container padding={'4em 0'} margin={'3em 0'}>
			<ThreePostsList />
			<LinkButton
				to="/blog-posts/"
				align={'center'}
				border={'1.5px solid #1f1b58'}
				color={'#1f1b58'}
				radius={4}
				hoverBgColor={'#1f1b58'}
				hoverColor={'#efefef'}
			>
				See More Blog
			</LinkButton>
		</Container>
	</Section>
);
export default Section3;
