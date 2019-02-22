import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from 'assets/styled/theme';

const PostCard = ({ date, excerpt, image, path, title }) => {
	return (
		<SetPostCard>
			<Link to={path}>
				<Img fluid={image} />
				<Title>{title}</Title>
				<Date>{date}</Date>
				<Excerpt>{excerpt}</Excerpt>
			</Link>
		</SetPostCard>
	);
};

PostCard.propTypes = {
	bgColor: PropTypes.string,
	date: PropTypes.string,
	image: PropTypes.object,
	path: PropTypes.string,
	title: PropTypes.string,
	excerpt: PropTypes.string
};

export default PostCard;

/* Style */
const SetPostCard = styled.div`
	background: ${props => props.bgColor || '#f1f1f1'};
	width: 100%;
	border-radius: 2px;

	/* Mobile */
	@media screen and (min-width: ${theme.breakpoints.mobile}) {
		flex: 0 0 49%;
		margin: 0 0 2vw 0;
	}

	/* Tablets */
	@media screen and (min-width: ${theme.breakpoints.tablet}) {
		flex: 0 0 32%;
	}
	&:hover {
		background: ${theme.colors.tertiary};
	}
	a {
		display: flex;
		flex-flow: column;
		height: 100%;
		width: 100%;
		color: ${theme.colors.primary};
		text-decoration: none;
		.gatsby-image-wrapper {
			height: 0;
			padding-bottom: 60%;
		}
	}
`;

const Title = styled.h2`
	/* font-size: 1.5rem; */
	font-weight: 400;
	text-transform: capitalize;
	margin: 1rem 1rem 0 1rem;
	line-height: 1.7em;
`;

const Date = styled.span`
	color: #888;
	margin: 0rem 1rem 0.5rem;
`;

const Excerpt = styled.div`
	padding: 1em;
	line-height: 1.7em;
`;
