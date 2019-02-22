import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = ({
	bgColor,
	borderColor,
	borderWidth,
	color,
	focusColor,
	fontSize,
	hoverBgColor,
	hoverColor,
	margin,
	name,
	onChange,
	padding,
	placeholder,
	pointer,
	radius,
	type,
	value,
	width
}) => (
	<SetInput
		type={type}
		placeholder={placeholder}
		bgColor={bgColor}
		borderColor={borderColor}
		borderWidth={borderWidth}
		color={color}
		focusColor={focusColor}
		fontSize={fontSize}
		hoverBgColor={hoverBgColor}
		hoverColor={hoverColor}
		margin={margin}
		name={name}
		onChange={onChange}
		padding={padding}
		pointer={pointer}
		radius={radius}
		value={value}
		width={width}
		autocomplete="current-password"
	/>
);

//note:  value can be string or function especially with react form.
//note: onChange is a function.

Input.propTypes = {
	bgColor: PropTypes.string,
	borderColor: PropTypes.string,
	borderWidth: PropTypes.string,
	color: PropTypes.string,
	focusColor: PropTypes.string,
	fontSize: PropTypes.string,
	hoverBgColor: PropTypes.string,
	hoverColor: PropTypes.string,
	margin: PropTypes.string,
	padding: PropTypes.string,
	placeholder: PropTypes.string,
	placeholderColor: PropTypes.string,
	radius: PropTypes.string,
	width: PropTypes.string
};

export default Input;

const SetInput = styled.input`
	background-color: ${props => props.bgColor || undefined};
	color: ${props => props.color || undefined};
	width: ${props => props.width || '100%'};
	padding: ${props => props.padding || '1em'};
	margin: ${props => props.margin || '1em 0'};
	font-size: ${props => props.fontSize || '1em'};
	border-color: ${props => props.borderColor || '#a9a9a9'};
	border-width: ${props => props.borderWidth || '1.5px'};
	border-style: solid;
	border-radius: ${props => props.radius || undefined};
	transition: 0.15s ease-in-out;
	cursor: ${props => (props.pointer ? 'pointer' : 'default')};

	&:hover {
		background-color: ${props => props.hoverBgColor || undefined};
		color: ${props => props.hoverColor || undefined};
	}
	&:focus {
		border-color: ${props => props.focusColor || '#709adf'};
	}
	&::placeholder {
		color: ${props => props.placeholderColor || undefined};
	}
`;
