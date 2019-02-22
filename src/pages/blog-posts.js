import React from 'react';
import Helmet from 'react-helmet';
import config from 'assets/utils/profile';

/* Components*/
import { Layout, SEO } from 'components';

/* Commons */
import { Container, Link } from 'commons';

import { PostsList } from 'templates';

const Page = () => (
	<Layout>
		<SEO
			title={`${config.title} - Blog Posts`}
			keywords={[ `blog`, `posts`, `page`, `updates` ]}
		/>
		<Helmet>
			<title>{`${config.title} - Blog Posts`}</title>
			<link rel="canonical" href={`${config.url}/`} />
		</Helmet>
		<Container padding={'1em'}>
			<Link to="/" fontSize={'1.2em'} color={'#1f1b58'} pointer>
				&larr; Return to Home
			</Link>
			<PostsList />
		</Container>
	</Layout>
);
export default Page;
