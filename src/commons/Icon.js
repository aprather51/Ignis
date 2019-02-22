import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';

const Icon = ({ color, icon, margin, size, hover }) => (
	<SetSvg
		hover={hover}
		color={color}
		size={size}
		margin={margin}
		viewBox="0 0 1024 1024"
	>
		<path d={icon} />
	</SetSvg>
);

Icon.propTypes = {
	icon: PropTypes.string.isRequired,
	color: PropTypes.string,
	margin: PropTypes.string,
	size: PropTypes.string,
	hover: PropTypes.bool
};

export default Icon;

/* Styles */
const SetSvg = styled.svg`
	display: flex;
	justfify-content: center;
	align-items: center;
	width: ${props => props.size || '1rem'};
	height: ${props => props.size || '1rem'};
	margin: ${props => props.margin || '0'};
	fill: ${props => props.color || '#111'};
	transition: fill 0.2s ease-in-out;
	:hover {
		fill: ${props => (props.hover ? lighten(1, props.color) : props.color)};
	}
`;
