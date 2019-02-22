import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import theme from 'assets/styled/theme';

const LinkButton = ({
	children,
	to,
	align,
	bgColor,
	border,
	color,
	fontSize,
	hoverBgColor,
	hoverColor,
	margin,
	padding,
	radius,
	width
}) => (
	<SetLinkButton
		align={align}
		bgColor={bgColor}
		border={border}
		color={color}
		fontSize={fontSize}
		hoverBgColor={hoverBgColor}
		hoverColor={hoverColor}
		margin={margin}
		padding={padding}
		radius={radius}
		width={width}
	>
		<Link to={to}>{children}</Link>
	</SetLinkButton>
);

LinkButton.propTypes = {
	align: PropTypes.string,
	bgColor: PropTypes.string,
	border: PropTypes.string,
	color: PropTypes.string,
	fontSize: PropTypes.string,
	hoverBgColor: PropTypes.string,
	hoverColor: PropTypes.string,
	margin: PropTypes.string,
	padding: PropTypes.string,
	radius: PropTypes.number,
	width: PropTypes.string
};

export default LinkButton;

const SetLinkButton = styled.div`
	text-align: ${props => props.align};
	margin: ${props => props.margin || '2em auto'};
	width: 100%;
	a {
		display: inline-block;
		background: ${props => props.bgColor || 'transparent'};
		color: ${props => props.color || undefined};
		width: 100%;
		padding: ${props => props.padding || '1em 2em'};
		font-size: ${props => props.fontSize || '1em'};
		border: ${props => props.border};
		border-radius: ${props => props.radius || '0'}px;
		transition: .25s ease-in-out;
		:hover {
			background: ${props => props.hoverBgColor || 'transparent'};
			color: ${props => props.hoverColor || undefined};
		}

		@media screen and (min-width: ${theme.breakpoints.desktop}) {
			width: ${props => props.width || '20%'};
		}
	}
`;
