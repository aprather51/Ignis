import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Textarea = ({
	bgColor,
	borderColor,
	borderWidth,
	color,
	focusColor,
	fontSize,
	height,
	id,
	margin,
	name,
	onChange,
	padding,
	placeholder,
	type,
	radius,
	rows,
	value,
	width
}) => (
	<SetTextarea
		type={type}
		placeholder={placeholder}
		bgColor={bgColor}
		borderColor={borderColor}
		borderWidth={borderWidth}
		color={color}
		focusColor={focusColor}
		fontSize={fontSize}
		height={height}
		id={id}
		margin={margin}
		name={name}
		onChange={onChange}
		padding={padding}
		radius={radius}
		rows={rows}
		value={value}
		width={width}
	/>
);

//note:  value can be string or function especially with react form.
//note: onChange is a function.

Textarea.propTypes = {
	bgColor: PropTypes.string,
	borderColor: PropTypes.string,
	borderWidth: PropTypes.string,
	color: PropTypes.string,
	focusColor: PropTypes.string,
	fontSize: PropTypes.string,
	height: PropTypes.string,
	margin: PropTypes.string,
	padding: PropTypes.string,
	placeholder: PropTypes.string,
	placeholderColor: PropTypes.string,
	radius: PropTypes.string,
	width: PropTypes.string
};

export default Textarea;

const SetTextarea = styled.textarea`
	background-color: ${props => props.bgColor || undefined};
	color: ${props => props.color || undefined};
	width: ${props => props.width || '100%'};
	height: ${props => props.height || '200px'};
	padding: ${props => props.padding || '1em'};
	margin: ${props => props.margin || '1em 0'};
	font-size: ${props => props.fontSize || '1em'};
	border-color: ${props => props.borderColor || '#a9a9a9'};
	border-width: ${props => props.borderWidth || '1.5px'};
	border-style: solid;
	border-radius: ${props => props.radius || undefined};
	transition: 0.15s ease-in-out;
	resize: none;
	&:focus {
		border-color: ${props => props.focusColor || '#709adf'};
	}
	&::placeholder {
		color: ${props => props.placeholderColor || undefined};
	}
`;
