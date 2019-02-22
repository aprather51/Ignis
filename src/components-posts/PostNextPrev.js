import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { lighten } from 'polished';

const PostNextPrev = ({ bgColor, color, next, prev, radius }) => {
	return (
		<Content>
			<Box bgColor={bgColor} color={color}>
				{prev && (
					<Prev to={prev.fields.slug}>
						<span>&#129052;</span> Prev
						<p>{prev.frontmatter.title}</p>
					</Prev>
				)}

				<Home to={'/'}>Return Back home</Home>

				{next && (
					<Next to={next.fields.slug}>
						Next <span color={color}>&#129054;</span>
						<p>{next.frontmatter.title}</p>
					</Next>
				)}
			</Box>
		</Content>
	);
};

export default PostNextPrev;

const Content = styled.div`margin: 5em 0 3em 0;`;

const Prev = styled(Link)`
  margin-right: auto;
  order: 1;
`;

const Home = styled(Link)`
  margin: auto;
  order: 2;
`;

const Next = styled(Link)`
  margin-left: auto;
  order: 3;
`;

const Box = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	width: 100%;
	a {
		background: ${props =>
			props.bgColor || props.theme.colors.primary || undefined};
		color: ${props => props.color || props.theme.colors.secondary || undefined};
		padding: 1em;
		border-radius: ${props => props.radius || '4px'};
		transition: 0.2s;
		text-align: center;
		&:hover {
			background: ${props =>
				lighten(0.1, props.bgColor || props.theme.colors.primary)}
	}
	p {
		color: ${props => props.color || props.theme.colors.secondary || undefined};
		padding: .5em 0 0 0;
		font-size: 80%;
	}

	span {
		color: ${props => props.color || props.theme.colors.secondary || undefined};
	}
`;
