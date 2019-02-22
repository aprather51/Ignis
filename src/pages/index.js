import React from 'react';
import Helmet from 'react-helmet';
import config from 'assets/utils/profile';

/* Components */
import { Layout, SEO } from 'components';

/* Commons */
import { Hero } from 'commons';

/* Section */
import {
	Landing,
	Section1,
	Section2,
	Section3,
	Section4,
	Section5
} from 'sections';

const IndexPage = () => (
	<Layout>
		<SEO
			title={`${config.title} - Home`}
			keywords={[ `homepage`, `page`, `new` ]}
		/>
		<Helmet>
			<title>{`${config.title} - Home`}</title>
			<link rel="canonical" href={`${config.url}/`} />
		</Helmet>

		<Hero
			bgImage={
				'linear-gradient(to right top, #1f1b58, #5c1354, #841143, #992e2b, #9c520d)'
			}
		>
			<Landing />
		</Hero>
		<Section1 />
		<Section2 />
		<Section3 />
		<Section4 />
		<Section5 />
	</Layout>
);

export default IndexPage;
