import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'assets/styled/theme';

const PostContent = ({ linkColor, post }) => {
	return <Body dangerouslySetInnerHTML={post} linkColor={linkColor} />;
};

PostContent.propTypes = {
	post: PropTypes.object.isRequired
};

export default PostContent;

const Body = styled.div`
	h1,
	h2,
	h3 {
		font-weight: 600;
		margin: 0 0 1rem 0;
		line-height: 1.25 !important;
		text-transform: capitalize;
	}

	p {
		line-height: 1.6;
		margin: 0 0 2em 0;
	}

	a {
		color: ${props => props.txtColor || '#222'};
		box-shadow: inset 0 -2px 0 ${props => props.linkColor || theme.colors.link || '#1e90ff'};
		transition: 0.2s;
		&:hover {
			background-color: ${props =>
				props.linkColor || theme.colors.link || '#1e90ff'};
		}
	}

	del {
		text-decoration: line-through;
	}

	strong {
		font-weight: 600;
	}
	em {
		font-style: italic;
	}

	ul,
	ol {
		margin: 0 0 2em 0;
	}

	ul {
		li {
			list-style: disc;
			list-style-position: inside;
			line-height: 1.25;
			&:last-child {
				margin: 0;
			}
		}
	}

	ol {
		li {
			list-style: decimal;
			list-style-position: inside;
			line-height: 1.25;
			&:last-child {
				margin: 0;
			}
		}
	}

	blockquote {
		font-style: italic;
		border-left: 4px solid #aaa;
		padding: 0 0 0 0.5em;
	}

	/*not allowing a > p > img with box-shadow and hover assigned */
	.gatsby-resp-image-link {
		box-shadow: none;
		&:hover {
			background-color: transparent;
		}
	}
`;
