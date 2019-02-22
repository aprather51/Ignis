import React from 'react';
import GetLink from 'gatsby-link';
import styled from 'styled-components';

const Link = ({
	children,
	to,
	align,
	bgColor,
	color,
	fontSize,
	fontWeight,
	margin,
	padding,
	top,
	bottom,
	left,
	right,
	zIndex
}) => (
	<SetLink
		align={align}
		bgColor={bgColor}
		color={color}
		fontSize={fontSize}
		fontWeight={fontWeight}
		margin={margin}
		padding={padding}
		top={top}
		bottom={bottom}
		left={left}
		right={right}
		zIndex={zIndex}
	>
		<GetLink to={to}>{children}</GetLink>
	</SetLink>
);
export default Link;

const SetLink = styled.div`
	text-align: ${props => props.align};
	margin: ${props => props.margin || '2em auto'};
	width: 100%;
	a {
		position: relative;
		top: ${props => props.top || '0'};
		left: ${props => props.left || '0'};
		right: ${props => props.right || '0'};
		bottom: ${props => props.bottom || '0'};
		background-color: ${props => props.bgColor || 'transparent'};
		color: ${props => props.color || '#222'};
		padding: ${props => props.padding || '.3em'};
		margin: ${props => props.margin || '1em'};
		font-size: ${props => props.fontSize || '1em'};
		font-weight: ${props => props.fontWeight || undefined};
		cursor: pointer;
		z-index: ${props => props.zIndex || '100'};
	}
`;
